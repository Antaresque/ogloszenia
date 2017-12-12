import { KategorieService } from './../../_core/kategorie/kategorie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminkategoria',
  templateUrl: './adminkategoria.component.html',
  styleUrls: ['./adminkategoria.component.css']
})
export class AdminKategoriaComponent implements OnInit {

  model: any = {}
  kategorie: any = {}

  constructor(private kat: KategorieService) { }

  ngOnInit() {
    this.kat.select(114).subscribe(
      res => {  this.kategorie = res
    })
  }

  addkat(){
    this.kat.create(this.model).subscribe(
      res => console.log(res))
  }
}
