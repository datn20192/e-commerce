import { Component, Input, OnInit, HostListener, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { FeedbackService } from './feedback.service';
import { User } from '../../../../models/user.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit, OnDestroy {
  @Input() product;
  @Output() close = new EventEmitter();
  user: User;
  canVote: boolean = false;
  isOpenFb: boolean = false;
  formFb: FormGroup;
  idPrevious: any;//#id css previous
  idNext: any; // #id css next
  voted: number;//vote star
  feedbackSubs: Subscription[] = [];
  constructor(
    private authService: AuthService,
    private fbService: FeedbackService,
    private fb: FormBuilder) { }


  ngOnInit() {
    this.feedbackSubs.push(this.fbService.loadFeedback(this.product.id).subscribe());
    this.formFb = this.fb.group({
      feedback: ['', [Validators.required, Validators.minLength(20)]]
    })
    this.authService.user$.subscribe(user => {
      this.user = user;
      if(this.authService.isCustomer(user)) this.canVote=true;
    });
  }
  ngOnDestroy() {
    this.feedbackSubs.forEach(sub => {sub.unsubscribe();});
    if(this.fbService.fbRefSubs) this.fbService.fbRefSubs.unsubscribe();
    if(this.fbService.updateStarSubs) this.fbService.updateStarSubs.unsubscribe();
  }
  isOpenFeedback() {
    this.isOpenFb = !this.isOpenFb;
  }
  onSubmit(form: FormGroup) {
    if (!isNaN(this.voted)) {
      this.fbService.sendFeedback(this.product, this.user, form.value, this.voted);
      this.close.emit(null);
    }
    else{
      alert(`Bạn cần đánh giá sao sản phẩm`);
    }
  }
  @HostListener('click', ['$event'])
  onClick(id) {
    let star = document.getElementById(id.target.id);

    if (star != null) {
      let vote = document.getElementsByClassName('star-vote')[0];
      let vote_child = vote.getElementsByTagName('i')
      for (let i = 0; i < vote_child.length; i++) {
        if (vote_child[i].id === id.target.id) this.voted = i + 1;
      }
      star.style.color = 'yellow';
      this.idPrevious = id.toElement;
      this.idNext = id.toElement;
      while (this.idNext != null) {
        if (star != null) {
          this.idNext = this.idNext.nextElementSibling;
          if (this.idNext != null) {
            star = document.getElementById(this.idNext.id);
            star.style.color = 'black';
          }
        }
      }
      while (this.idPrevious != null) {
        if (star != null) {
          this.idPrevious = this.idPrevious.previousElementSibling;
          if (this.idPrevious != null) {
            star = document.getElementById(this.idPrevious.id);
            star.style.color = 'yellow';
          }
        }
      }
    }
  }
}