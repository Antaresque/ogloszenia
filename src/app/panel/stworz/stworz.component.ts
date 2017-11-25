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
  formData: FormData;

  constructor(private ogl: OgloszeniaService) { }

  ngOnInit() {
  }

  submit(event){
    this.loading = true;
    this.ogl.create(this.model).subscribe(
      data => {
        console.log(data['_body']);
        let id_og = JSON.parse(data['_body'])['id'];
        this.formData.append('id', id_og);
        this.ogl.upload_img(this.formData).subscribe(
          res => {
            console.log(res);
            this.model = {};
            this.loading = false;
          },
          err => {
            console.log(err)
            this.model = {};
            this.loading = false;
          }
        );
      },
      err => {
        this.model = {};
        console.log(err['_body']);
        this.loading = false;
      });
  }

  submit_zdj(event, id){
    let fileList = event.target;
    let file = fileList.files[0];
    this.formData = new FormData();
    console.log(event.target.name);
    this.formData.append(event.target.name, file);

    /*this.ogl.create(this.model).subscribe(
      (res) => {console.log(res);},
      (err) => {console.log(err);}
    );*/
  }
}
