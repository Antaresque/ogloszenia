import { Gallery } from './../_shared/generate-gallery.class';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  sub: any;
  id: number;
  dane: Ogloszenie;
  zdjecia: any = [];
  img_path: string;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute, private ogloszenia: OgloszeniaService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
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
        res => { this.dane = JSON.parse(res['_body']); }
    );
    this.ogloszenia.select_zdj(this.id).subscribe(
      res => {
          this.zdjecia = JSON.parse(res['_body']);
          this.galleryImages = Gallery.generateImages(this.zdjecia, this.img_path);
      }
    );
  }
}
