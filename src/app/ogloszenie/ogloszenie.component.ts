import { tokenNotExpired } from 'angular2-jwt';
import { UserService } from './../_core/user/user.service';
import { KategorieService } from './../_core/kategorie/kategorie.service';
import { Gallery } from './../_shared/generate-gallery.class';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ogloszenie } from '../_core/ogloszenia/ogloszenie.class';
import { OgloszeniaService } from '../_core/ogloszenia/ogloszenia.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import 'hammerjs';

@Component({
  selector: 'app-ogloszenie',
  templateUrl: './ogloszenie.component.html',
  styleUrls: ['./ogloszenie.component.css']
})
export class OgloszenieComponent implements OnInit {

  id: number;
  obserwowane: any = [];
  dane: any = [];
  zdjecia: any = [];
  kategorie: any = [];
  uzytk: any = [];
  atrybuty: any = [];
  atrybuty_values: any = [];
  model: any = {}
  img_path: string;

  logged: boolean;

  telefonshow: boolean = false;
  obserwowany: boolean = false;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute, private router: Router, private ogloszenia: OgloszeniaService, private kat: KategorieService, private user: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.logged = tokenNotExpired();

    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      {
          breakpoint: 400,
          preview: false
      }
    ];

    this.img_path = this.ogloszenia.img_path;

    this.ogloszenia.select(this.id).subscribe(
        res => {
          this.dane = res;
          this.atrybuty_values = JSON.parse(res.atrybuty);
          console.log(this.atrybuty_values);
          this.kat.select_tree(this.dane.id_kat).subscribe(
            res => {
              this.kategorie = res;
            }
          )
          this.kat.select_attr(this.dane.id_kat).subscribe(
            res => {
              this.atrybuty = res;
            }
          )
          this.user.dataPublic(this.dane.id_uz).subscribe(
            res => {
              this.uzytk = res;
            }
          )
        }
    );
    this.ogloszenia.select_zdj(this.id).subscribe(
      res => {
          this.zdjecia = res;
          this.galleryImages = Gallery.generateImages(this.zdjecia, this.img_path);
      }
    );

    this.user.obs_select().subscribe(
      res => {this.obserwowane = res;
              this.obserwowany = this.obs_exists(this.dane.id_og);}
    );
  }

  search(id){
    if(id == "") this.model.kategoria = null;
    else this.model.kategoria = id;
    this.router.navigate(['/wyszukiwarka'], {queryParams: {kategoria: this.model.kategoria}, queryParamsHandling: 'merge'});
  }

  sendMessage(){
    this.router.navigate(['/panel/wiadomosci/new'], {queryParams: {nazwa: this.dane.nazwa, odbiorca: this.dane.nazwa_uz}});
  }

  obs_exists(id){
    return this.obserwowane.includes(parseInt(id));
  }
  obserwowaneDodaj(){
    const id = this.dane.id_og;

    if(this.obs_exists(id))
    this.user.obs_delete(id).subscribe(res =>
      this.user.obs_select().subscribe(
        res => {this.obserwowane = res;
                this.obserwowany = this.obs_exists(this.dane.id_og);}
    ));
  else
    this.user.obs_add(id).subscribe(res =>
      this.user.obs_select().subscribe(
        res => {this.obserwowane = res;
                this.obserwowany = this.obs_exists(this.dane.id_og);}
    ));
}
}
