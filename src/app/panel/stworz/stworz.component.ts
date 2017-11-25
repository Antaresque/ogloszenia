import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OgloszeniaService } from '../../_core/ogloszenia/ogloszenia.service';

@Component({
  selector: 'app-stworz',
  templateUrl: './stworz.component.html',
  styleUrls: ['./stworz.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StworzComponent implements OnInit {

  model: any = {
    id_kat: 1
  };
  loading = false;

  constructor(private ogl: OgloszeniaService) { }

  ngOnInit() {
  }

  submit_zdj(event){
    let fileList = event.target;
    let file = fileList.files[0];
    let formData = new FormData();
    formData.append('uploadFile', file);
    this.ogl.upload_img(formData).subscribe(
      res => console.log(res),
      err => console.log(err)
    );

    /*this.ogl.create(this.model).subscribe(
      (res) => {console.log(res);},
      (err) => {console.log(err);}
    );*/
  }
}
