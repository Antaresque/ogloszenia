import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { OgloszeniaService } from '../../_core/ogloszenia/ogloszenia.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stworz',
  templateUrl: './stworz.component.html',
  styleUrls: ['./stworz.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StworzComponent implements OnInit {

  model: any = {};
  loading = false;
  formData = new FormData();
  @ViewChild('files') files: FormGroup;

  constructor(private ogl: OgloszeniaService) { }

  ngOnInit() {
  }

  submit(event){ //po submitowaniu form
    this.loading = true;
    this.ogl.create(this.model).subscribe( //wrzuca ogloszenie
      data => {
        let id_og = JSON.parse(data['_body'])['id'];
        this.formData.append('id', id_og);
        this.ogl.upload_img(this.formData).subscribe( //wrzuca zdjecie z id ogloszenia
          res => {
            console.log(res);
            this.model = {};
            //this.files.reset();
            this.loading = false;
          },
          err => {
            console.log(err);
            this.model = {};
            this.loading = false;
          }
        );
      },
      err => {
        this.model = {};
        this.loading = false;
      });
  }

  submit_zdj(event){ //dodaje zdjecie do formdata po wybraniu
    let fileList = event.target;
    let file = fileList.files[0];
    console.log(event.target.name);
    this.formData.append(event.target.name, file);

    /*this.ogl.create(this.model).subscribe(
      (res) => {console.log(res);},
      (err) => {console.log(err);}
    );*/
  }
}
