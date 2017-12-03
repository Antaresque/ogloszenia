import { KategorieService } from './../../_core/kategorie/kategorie.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-atrybuty',
  templateUrl: './atrybuty.component.html',
  styleUrls: ['./atrybuty.component.css']
})
export class AtrybutyComponent implements OnInit {

  @Input() kat_id: number;
  kategorie: any = []
  atrybuty: any = []

  constructor(private kat: KategorieService) { }

  ngOnInit() {
    this.kat.select_tree(this.kat_id).subscribe(
      res => {
        this.kategorie = JSON.parse(res['_body']);
        this.kategorie.forEach(
          item => this.atrybuty.push.apply(this.atrybuty, JSON.parse(item.atrybuty))
        )},
      err => console.log(err)
    )
  }

}
