import { Router } from '@angular/router';
import { KategorieService } from './../../_core/kategorie/kategorie.service';
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
  kat: any = [];
  loading = false;
  formData = new FormData();
  @ViewChild('files') files: FormGroup;

  constructor(private ogl: OgloszeniaService, private katserv: KategorieService, private router: Router) { }

  ngOnInit() {
    this.katserv.select_all().subscribe(
      res => this.kat = res
    )
  }

  getKategoria(event){
    let option = event.target.selectedOptions;
    this.model.id_kat = option[0].value;
  }

  submit(event){ //po submitowaniu form
    this.loading = true;
    this.ogl.create(this.model).subscribe( //wrzuca ogloszenie
      res => {
        let id_og = res['id'];
        this.formData.append('id', id_og);
        this.ogl.upload_img(this.formData).subscribe( //wrzuca zdjecie z id ogloszenia
          res => {
            this.model = {};
            //this.files.reset();
            this.loading = false;
            this.router.navigate(['/ogloszenie/' + id_og]);
          },
          err => {
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
