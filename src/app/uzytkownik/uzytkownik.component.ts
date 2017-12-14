import { OgloszeniaService } from './../_core/ogloszenia/ogloszenia.service';
import { tokenNotExpired } from 'angular2-jwt';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../_core/user/user.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-uzytkownik',
  templateUrl: './uzytkownik.component.html',
  styleUrls: ['./uzytkownik.component.css']
})
export class UzytkownikComponent implements OnInit {
  logged: boolean;

  id: number;
  dane: any = {}

  constructor(private route: ActivatedRoute, private user: UserService, private router: Router, ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.user.data(this.id).subscribe(
        res => {
          this.dane = res;
        },
        err => {
          console.log(err);
        }
      )
    });
    this.logged = tokenNotExpired();
  }
  

  sendMessage(){
    this.router.navigate(['/panel/wiadomosci/new'], {queryParams: {odbiorca: this.dane.login}});
  }

}

export class MojeogComponent implements OnInit {
  
    wyniki: any = []
    img_path: string;
    id: number;
    noresults = false;
  
    constructor(private user: UserService, private ogl: OgloszeniaService, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = +params['id'];
      });
      this.id = this.user.getPayload().id;
      this.img_path = this.ogl.img_path;
  
      this.ogl.search_by_user(this.id).subscribe(
        res => {
          let temp = res;
          if(temp.hasOwnProperty('result')) this.noresults = true;
          else this.wyniki = temp;
        },
        err => console.log(err)
      );
    }
  }
