import { WiadomosciService } from './../../../_core/wiadomosci/wiadomosci.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  model: any = {}

  constructor(private fb: FormBuilder, private user: UserService, private router: Router, private wiad: WiadomosciService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(
      params => {
        this.model['nazwa'] = params['nazwa'] || null;
        this.model['odbiorca'] = params['odbiorca'] || null;
      })
    }

  ngOnInit() {
    this.form = this.fb.group({
      temat: [this.model['nazwa'], Validators.required],
      odbiorca: [this.model['odbiorca'], Validators.required],
      tresc: ['', Validators.required],
    })
  }

  send(){
    if(this.form.valid){
      this.loading = true;
      this.user.search_name(this.form.value.odbiorca).subscribe(
        res => {
          let temp = res;
          if(!(temp == null)){
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
                this.form.reset();
              });
            }
          else {
            this.loading = false;
            this.form.hasError
          }
        },
        error => {
          this.loading = false;
        });
    }
  }
}

