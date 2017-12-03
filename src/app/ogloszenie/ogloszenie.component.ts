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
  dane: any = [];
  zdjecia: any = [];
  kategorie: any = [];
  uzytk: any = [];
  model: any = {}
  img_path: string;

  telefonshow: boolean = false;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute, private router: Router, private ogloszenia: OgloszeniaService, private kat: KategorieService, private user: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

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
          this.dane = JSON.parse(res['_body']);
          this.kat.select_tree(this.dane.id_kat).subscribe(
            res => {
              this.kategorie = JSON.parse(res['_body']);
            }
          )
          this.user.dataPublic(this.dane.id_uz).subscribe(
            res => {
              this.uzytk = JSON.parse(res['_body']);
            }
          )
        }
    );
    this.ogloszenia.select_zdj(this.id).subscribe(
      res => {
          this.zdjecia = JSON.parse(res['_body']);
          this.galleryImages = Gallery.generateImages(this.zdjecia, this.img_path);
      }
    );
  }

  search(id){
    if(id == "") this.model.kategoria = null;
    else this.model.kategoria = id;
    this.router.navigate(['/wyszukiwarka'], {queryParams: {kategoria: this.model.kategoria}, queryParamsHandling: 'merge'});
  }

  sendMessage(id){
    this.router.navigate(['/panel/wiadomosci/new'], {queryParams: {id_og: id}});
  }
}
