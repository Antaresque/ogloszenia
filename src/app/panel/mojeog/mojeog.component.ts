import { UserService } from './../../_core/user/user.service';
import { OgloszeniaService } from './../../_core/ogloszenia/ogloszenia.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-mojeog',
  templateUrl: './mojeog.component.html',
  styleUrls: ['./mojeog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MojeogComponent implements OnInit {

  wyniki: any = []
  img_path: string;
  id: number;
  noresults = false;

  constructor(private user: UserService, private ogl: OgloszeniaService) { }

  ngOnInit() {
    this.id = this.user.getPayload().id;
    this.img_path = this.ogl.img_path;

    this.ogl.search_by_user(this.id).subscribe(
      res => {
        console.log(res);
        let temp = JSON.parse(res['_body']);
        console.log(temp);
        if(temp.hasOwnProperty('result')) this.noresults = true;
        else this.wyniki = temp;
      },
      err => console.log(err)
    );
  }
}
