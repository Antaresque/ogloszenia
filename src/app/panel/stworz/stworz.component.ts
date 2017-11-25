import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OgloszeniaService } from '../../_core/ogloszenia/ogloszenia.service';

@Component({
  selector: 'app-stworz',
  templateUrl: './stworz.component.html',
  styleUrls: ['./stworz.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StworzComponent implements OnInit {

  modal: any = {}

  constructor(private ogl: OgloszeniaService) { }

  ngOnInit() {
  }

  submit(){
    this.ogl.create(this.modal).subscribe(
      (res) => {console.log(res);},
      (err) => {console.log(err);}
    );
  }
}
