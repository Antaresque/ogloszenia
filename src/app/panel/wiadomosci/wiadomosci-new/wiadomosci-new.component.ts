import { WiadomosciService } from './../../../_core/wiadomosci/wiadomosci.service';
import { Router } from '@angular/router';
import { UserService } from './../../../_core/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiadomosci-new',
  templateUrl: './wiadomosci-new.component.html',
  styleUrls: ['./wiadomosci-new.component.css']
})
export class WiadomosciNewComponent implements OnInit {

  form: FormGroup;
  loading = false;
  wrongname = false;

  constructor(private fb: FormBuilder, private user: UserService, private router: Router, private wiad: WiadomosciService) { }

  ngOnInit() {
    this.form = this.fb.group({
      temat: ['', Validators.required],
      odbiorca: ['', Validators.required],
      tresc: ['', Validators.required],
    })
  }

  send(){
    if(this.form.valid){
      this.loading = true;
      this.user.search_name(this.form.value.odbiorca).subscribe(
        res => {
          let temp = JSON.parse(res['_body']);
          this.form.value.odbiorca = temp.id_uz;
          this.wiad.insert(this.form.value).subscribe(
            res => {
              console.log(res);
              this.loading = false;
              this.form.reset();
              this.router.navigate(['/panel/wiadomosci']);
            },
            error => {
              this.loading = false;
            });
        },
        error => {
          this.loading = false;
        });
    }
  }
}

