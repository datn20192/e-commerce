import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-group-products',
  templateUrl: './group-products.component.html',
  styleUrls: ['./group-products.component.css']
})
export class GroupProductsComponent implements OnInit {
  
  private category:string = '';

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.sharedService.categoryClick.subscribe(categoryId => this.category=categoryId);
  }

}
