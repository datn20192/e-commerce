import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CustomValidatorsPassword } from 'src/app/validators/custom-validators-password';
import { CustomValidator } from 'src/app/validators/custom-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isSubmitted = false;

  formSignup = new FormGroup({
    username: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    password: new FormControl('', Validators.compose([
        Validators.required,
        CustomValidator.patternValidator(/\d/, {hasNumber: true}),
        CustomValidator.patternValidator(/[A-Z]/, {hasCapitalCase: true}),
        CustomValidator.patternValidator(/[a-z]/, {hasSmallCase: true}),
        CustomValidator.patternValidator(/[ [!@#$%^&*()_+-={``²}]/, { hasSpecialCharacters: true }),
        Validators.minLength(8),
      ])),
    confirm: new FormControl('', Validators.required),
    terms: new FormControl(false, [Validators.requiredTrue]),
  }, (formGroup: FormGroup) => {
    return CustomValidatorsPassword.passwordMatchValidator(formGroup);
  });

  msgError: string = null;

  constructor(private auth: AuthService) { }

  @Output() onClick = new EventEmitter();

  ngOnInit() {
  }

  // convenience getter for easy access to form fields
  get f() { return this.formSignup['controls']; }


  //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formSignup.value, null, 4));
  onSubmit() {
    this.isSubmitted = true;
    if (this.formSignup.valid) {
      const email = this.formSignup.value['username'];
      const password = this.formSignup.value['password'].toString();
      const confirm = this.formSignup.value['confirm'].toString();
      const terms = this.formSignup.value['terms'];

      if (password === confirm) {
        if (terms) {
          this.auth.signUp(email, password).then(
            () => { alert('Đăng kí thành công'); this.isSubmitted = false; this.signupClick();}
          ).catch(
            (error) => { alert(error); }
          );
        } else {
          alert('Phải chấp nhận điều khoản');
        }
      } else {
        alert('Mật khẩu phải trùng khớp');
      }

    }
  }

  // close Modal
  signupClick(){
    this.onClick.emit(null);
  }

}
