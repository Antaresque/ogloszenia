import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ustawienia',
  templateUrl: './ustawienia.component.html',
  styleUrls: ['./ustawienia.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UstawieniaComponent implements OnInit {

  loading = false;
  model: any = {};

  wojewodztwa = [
    ' ',
    'woj. dolnośląskie',
    'woj. kujawsko-pomorskie',
    'woj. lubelskie',
    'woj. lubuskie',
    'woj. łódzkie',
    'woj. małopolskie',
    'woj. mazowieckie',
    'woj. opolskie',
    'woj. podkarpackie',
    'woj. podlaskie',
    'woj. pomorskie',
    'woj. śląskie',
    'woj. świętokrzyskie',
    'woj. warmińsko-mazurskie',
    'woj. wielkopolskie',
    'woj. zachodniopomorskie'
    ];

  constructor() { }

  ngOnInit() {
  }

}
