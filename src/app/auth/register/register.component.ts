import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_core/user/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Wojewodztwa } from '../../_core/ogloszenia/wojewodztwa.class';

export function comparePassword(group: FormGroup) {
  let passgroup = group.value;
  return (passgroup.pass === passgroup.pass2) ? null /* It's good */ : {
    invalid: true
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  wojewodztwa = Wojewodztwa.wojewodztwa;
  form: FormGroup;

  constructor(private fb: FormBuilder, private user: UserService, private router: Router) { }

  loading = false;
  error: any = [];

  ngOnInit() {
    this.form = this.fb.group({
      login: ['', [Validators.required]],
      passGroup: this.fb.group(
        { pass: ['', [Validators.required]],
          pass2: ['', [Validators.required]]},
        {validator: comparePassword}),
      email: ['', Validators.compose([Validators.required, Validators.email])],
      imie: ['', Validators.required],
      nazwisko: ['', Validators.required],
      adres: ['', Validators.required],
      region: ['', Validators.required],
      miasto: ['', Validators.required],
      telefon: ['', Validators.compose( [Validators.required, Validators.min(111111111), Validators.max(999999999)] )]
    })
  }

  registerEvent() {
    if (this.form.valid) {
      const formValue = Object.assign({}, this.form.value);
      formValue.pass = formValue.passGroup.pass;
      delete formValue.passGroup;
      this.loading = true;
      this.user.insert(formValue).subscribe(
          data => {
            this.loading = false;
            this.error = [];
            this.form.reset();
            this.router.navigate(['/']);
          },
          error => {
            this.loading = false;
            this.error = error;
          });
      }
    }
}
