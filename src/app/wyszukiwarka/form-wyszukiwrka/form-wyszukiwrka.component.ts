import { KategorieService } from './../../_core/kategorie/kategorie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-wyszukiwrka',
  templateUrl: './form-wyszukiwrka.component.html',
  styleUrls: ['./form-wyszukiwrka.component.css']
})
export class FormWyszukiwrkaComponent implements OnInit {

  @Input() modelinput;
  model: any = {}

  constructor(private router: Router, private route: ActivatedRoute, private kat: KategorieService) {
  }

  ngOnInit() {
    this.model.nazwa = this.modelinput.nazwa || null;
  }

  search(){
    this.router.navigate(['/wyszukiwarka'], {queryParams: {nazwa: this.model.nazwa}, queryParamsHandling: 'merge'});
  }
  delete(){
    this.model.nazwa = '';
    this.router.navigate(['/wyszukiwarka'], {queryParams: {nazwa: this.model.nazwa}, queryParamsHandling: 'merge'});
  }
}
