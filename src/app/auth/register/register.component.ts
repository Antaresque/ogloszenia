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

  constructor(private fb: FormBuilder, private user: UserService) { }

  loading = false;
  model: any = {};

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      passGroup: this.fb.group(
        { password: ['', [Validators.required]],
          confirmPassword: ['', [Validators.required]]},
        {validator: comparePassword}),
      email: ['', Validators.compose([Validators.required, Validators.email])]
    })
  }

  registerEvent() {
    if (this.form.valid) {
      const formValue = Object.assign({}, this.form.value);
      formValue.password = formValue.passGroup.password;
      delete formValue.passGroup;
      this.loading = true;
      this.user.insert(this.model).subscribe(
            data => {
              this.loading = false;
          },
          error => {
              this.loading = false;
          });
      }
    }
}
