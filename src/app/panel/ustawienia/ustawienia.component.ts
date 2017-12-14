import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../_core/user/user.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Wojewodztwa } from '../../_core/ogloszenia/wojewodztwa.class';

export function comparePassword(group: FormGroup) {
  let passgroup = group.value;
  return (passgroup.pass === passgroup.pass2) ? null : {
    invalid: true
  }
}

export function compareEmail(group: FormGroup) {
  let passgroup = group.value;
  return (passgroup.email === passgroup.email2) ? null : {
    invalid: true
  }
}

@Component({
  selector: 'app-ustawienia',
  templateUrl: './ustawienia.component.html',
  styleUrls: ['./ustawienia.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UstawieniaComponent implements OnInit {

  loading = false;
  loading2 = false;
  loading3 = false;

  model: any = {};
  form_mail: FormGroup;
  form_pass: FormGroup;

  success: any = [];
  success2: any = [];
  success3: any = [];

  errors: any = [];
  errors2: any = [];
  errors3: any = [];

  wojewodztwa = Wojewodztwa.wojewodztwa;

  constructor(private fb: FormBuilder, private user: UserService, private router: Router) { }

  ngOnInit() {
    let payload = this.user.getPayload();
    this.user.dataPublic(payload.id).subscribe(
      res => this.model = res,
      err => this.errors = err
    )

    this.form_pass = this.fb.group({
      passGroup: this.fb.group(
        { pass: ['', [Validators.required] ],
          pass2: ['', [Validators.required] ] },
        { validator: comparePassword })});

    this.form_mail = this.fb.group({
      mailGroup: this.fb.group(
        { email: ['', Validators.compose([Validators.required, Validators.email]) ],
          email2: ['', Validators.compose([Validators.required, Validators.email])]},
        { validator: compareEmail })});
  }

  changeData(){
    this.loading = true;
    this.user.changeData(this.model).subscribe(
      res => {
        this.success = res;
        this.errors = [];
        this.loading = false;
        },
      err => {
        this.success = [];
        this.errors = err;
        this.loading = false;
      });
  }

  changePass(){
    if(this.form_pass.valid){
      this.loading3 = true;

      const formValue = Object.assign({}, this.form_pass.value);
      formValue.pass = formValue.passGroup.pass;
      delete formValue.passGroup;

      this.user.change_pass(formValue).subscribe(
        res => {
          this.success2 = res;
          this.errors2 = [];
          this.form_pass.reset();
          this.loading = false;
          },
        err => {
          this.success2 = [];
          this.errors2 = err;
          this.form_pass.reset();
          this.loading = false;
        });
    }
  }

  changeEmail(){
    if(this.form_mail.valid){
      this.loading2 = true;

      const formValue = Object.assign({}, this.form_mail.value);
      formValue.email = formValue.mailGroup.email;
      delete formValue.mailGroup;

      this.user.change_email(formValue).subscribe(
        res => {
          this.success3 = res;
          this.errors3 = [];
          this.form_mail.reset();
          this.loading = false;
          },
        err => {
          this.success3 = [];
          this.errors3 = err;
          this.form_mail.reset();
          this.loading = false;
        });
    }
  }
}
