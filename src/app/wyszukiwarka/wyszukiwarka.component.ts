import { UserService } from './../_core/user/user.service';
import { OgloszeniaService } from './../_core/ogloszenia/ogloszenia.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  obserwowane: any = [];

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
            let temp = JSON.parse(res['_body']);
            if(temp.hasOwnProperty('result')) this.noresults = true;
            else {
              this.pages = temp.pop(); //takes 1st key from array to variable
              this.wyniki = temp;
              this.noresults = false;
            }
          },
          err => console.log(err)
        );

        this.user.obs_select().subscribe(
          res => {this.obserwowane = JSON.parse(res['_body']);}
        )
    });
  }

  ngOnInit() {
  }

  obs_exists(id){
    return this.obserwowane.includes(parseInt(id));
  }

  search(event){
    this.router.navigate(['/wyszukiwarka'], {queryParams: event, queryParamsHandling: 'merge'});
  }
}
