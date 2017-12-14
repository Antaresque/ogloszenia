import { UserService } from './../../_core/user/user.service';
import { OgloszeniaService } from './../../_core/ogloszenia/ogloszenia.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-archiwum',
  templateUrl: './archiwum.component.html',
  styleUrls: ['./archiwum.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArchiwumComponent implements OnInit {

  wyniki: any = []
  img_path: string;
  id: number;
  errors: any = [];

  constructor(private user: UserService, private ogl: OgloszeniaService) { }

  ngOnInit() {
    this.id = this.user.getPayload().id;
    this.img_path = this.ogl.img_path;

    this.archiwum();
  }

  archiwum(){
    this.ogl.archiwum(this.id).subscribe(
      res => {
        this.wyniki = res;
      },
      err => {
        this.errors = err;
      }
    );
  }

  delete(id){
    this.ogl.delete(id).subscribe(
      res => this.archiwum()
    )
  }

  refresh(id){
    this.ogl.refresh(id).subscribe(
      res => this.archiwum()
    )
  }

}
