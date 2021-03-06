import { Wojewodztwa } from './../../_core/ogloszenia/wojewodztwa.class';
import { Router } from '@angular/router';
import { KategorieService } from './../../_core/kategorie/kategorie.service';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { OgloszeniaService } from '../../_core/ogloszenia/ogloszenia.service';
import { FormGroup } from '@angular/forms';
import { UserService } from '../../_core/user/user.service';

@Component({
  selector: 'app-stworz',
  templateUrl: './stworz.component.html',
  styleUrls: ['./stworz.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StworzComponent implements OnInit {

  model: any = {};
  model2: any = {};
  kat: any = [];
  podkategorie: any = [];
  atrybuty: any = [];
  loading = false;
  formData = new FormData();
  @ViewChild('files') files: FormGroup;
  @ViewChild('f') form;
  wojewodztwa = Wojewodztwa.wojewodztwa;

  constructor(private user: UserService, private ogl: OgloszeniaService, private katserv: KategorieService, private router: Router) { }

  ngOnInit() {
    this.katserv.select_all().subscribe(
      res => this.kat = res
    );
    let id = this.user.getPayload().id;
    this.user.dataPublic(id).subscribe(
      res => {
        this.model.email = res.email;
        this.model.wojewodztwo = res.wojewodztwo;
        this.model.nr_tel = res.nr_tel;
        this.model.miasto = res.miasto;
        this.model.adres = res.adres;
      },
      err => console.log(err)
    )
  }

  getAttr(id){
    this.katserv.select_attr(id).subscribe(
      res => this.atrybuty = res,
      err => this.atrybuty = []
    )
  }

  getKategoria(event){
    let option = event.target.selectedOptions;
    this.model.id_kat = option[0].value;

    this.katserv.select_podrz(option[0].value).subscribe(
      res => this.podkategorie = res,
      err => console.log(err)
    )

    this.getAttr(this.model.id_kat);
  }

  getPodkategoria(event){
    let option = event.target.selectedOptions;
    this.model.id_kat = option[0].value;

    this.getAttr(this.model.id_kat);
  }

  submit(event){ //po submitowaniu form
    this.loading = true;
    const formValue = this.model;
    formValue['atrybuty'] = this.model2;
    this.ogl.create(formValue).subscribe( //wrzuca ogloszenie
      res => {
        let id_og = res['id'];
        this.formData.append('id', id_og);
        this.ogl.upload_img(this.formData).subscribe( //wrzuca zdjecie z id ogloszenia
          res => {
            this.model = {};
            this.form.reset();
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
      event.path[1].children[0].children[0].src = '../zdjecia/ogl_uploaded.png';

      this.formData.append(event.target.name, file);
    }


    /*this.ogl.create(this.model).subscribe(
      (res) => {console.log(res);},
      (err) => {console.log(err);}
    );*/
  }

