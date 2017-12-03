import { KategorieService } from './../../_core/kategorie/kategorie.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-wyszukiwrka',
  templateUrl: './form-wyszukiwrka.component.html',
  styleUrls: ['./form-wyszukiwrka.component.css']
})
export class FormWyszukiwrkaComponent implements OnInit {

  @Input() modelinput;
  model: any = {}

  constructor(private router: Router, private kat: KategorieService) { }

  ngOnInit() {
    if(this.modelinput != null) this.model = this.modelinput;
  }

  search(){
    this.router.navigate(['/wyszukiwarka'], {queryParams: {nazwa: this.model.nazwa, kategoria: this.model.kategoria}});
  }
}
