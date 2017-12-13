import { UserService } from './../_core/user/user.service';
import { OgloszeniaService } from './../_core/ogloszenia/ogloszenia.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
  selector: 'app-wyszukiwarka',
  templateUrl: './wyszukiwarka.component.html',
  styleUrls: ['./wyszukiwarka.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WyszukiwarkaComponent implements OnInit {

  Arr = Array;
  model: any = {}
  wyniki: any = []
  pages: number;
  img_path: string;
  noresults = false;

  logged: boolean;
  obserwowane = new Array();

  constructor(private route: ActivatedRoute, private router: Router, private ogl: OgloszeniaService, private user: UserService) {
    this.route.queryParams.subscribe(
      params => {
        this.model['kategoria'] = params['kategoria'] || null;
        this.model['nazwa'] = params['nazwa'] || null;
        this.model['region'] = params['region'] || null;
        this.model['sort'] = params['sort'] || null;
        this.model['dir'] = params['dir'] || null;
        this.model['page'] = params['page'] || null;
        this.model['num'] = params['num'] || null;

        console.log(this.model);
        this.img_path = this.ogl.img_path;

        this.ogl.search(this.model).subscribe(
          res => {
              let temp = res;
              this.pages = temp.pop(); //takes 1st key from array to variable
              this.wyniki = temp;
              this.noresults = false;
          },
          err => {
            let error = err;
            if(error == 'Brak wyników'){ // jak nie pisać kodu 101 o 4 rano
              this.noresults = true;
            }
          }
        );

        this.logged = tokenNotExpired();

        if(this.logged){
          this.user.obs_select().subscribe(
            res => {this.obserwowane = JSON.parse(res);}
          )
        }
    });
  }

  ngOnInit() {

  }

  obs_exists(id){
    return this.obserwowane.includes(parseInt(id));
  }

  obs_change(id){
    if(this.obs_exists(id))
      this.user.obs_delete(id).subscribe(res =>
        this.user.obs_select().subscribe(
          res => this.obserwowane = JSON.parse(res)
      ));
    else
      this.user.obs_add(id).subscribe(res =>
        this.user.obs_select().subscribe(
          res => this.obserwowane = JSON.parse(res)
      ));
  }
  search(event){
    this.router.navigate(['/wyszukiwarka'], {queryParams: event, queryParamsHandling: 'merge'});
  }
}
