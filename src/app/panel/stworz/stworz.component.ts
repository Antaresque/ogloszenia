import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OgloszeniaService } from '../../_core/ogloszenia/ogloszenia.service';

@Component({
  selector: 'app-stworz',
  templateUrl: './stworz.component.html',
  styleUrls: ['./stworz.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StworzComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(private ogl: OgloszeniaService) { }

  ngOnInit() {
  }

  submit(){
    console.log(this.model);
    this.loading = true;
    this.ogl.create(this.model).subscribe(
      data => {
        console.log(data);
        this.model = {};
        this.loading = false;
      },
      err => {
        this.model = {};
        console.log(err['_body']);
        this.loading = false;
      });
  }

  submit_zdj(event){
    let fileList = event.target;
    let file = fileList.files[0];
    let formData = new FormData();
    formData.append('zdj', file);
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
