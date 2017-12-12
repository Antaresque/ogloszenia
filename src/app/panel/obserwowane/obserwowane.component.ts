import { UserService } from './../../_core/user/user.service';
import { OgloszeniaService } from './../../_core/ogloszenia/ogloszenia.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-obserwowane',
  templateUrl: './obserwowane.component.html',
  styleUrls: ['./obserwowane.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ObserwowaneComponent implements OnInit {

  wyniki: any = []
  img_path: string;
  id: number;
  noresults = false;

  constructor(private user: UserService, private ogl: OgloszeniaService) {
    this.img_path = this.ogl.img_path;
   }

  ngOnInit() {
    this.user.obs_select_detailed().subscribe(
      res => this.wyniki = res
    )
  }

}
