import { ActivatedRoute } from '@angular/router';
import { KategorieService } from './../../_core/kategorie/kategorie.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-atrybuty',
  templateUrl: './atrybuty.component.html',
  styleUrls: ['./atrybuty.component.css']
})
export class AtrybutyComponent implements OnInit {

  model: any = {}
  kategorie: any = []
  atrybuty: any = []

  constructor(private kat: KategorieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.model['kategoria'] = params['kategoria'] || null;
        this.model['nazwa'] = params['nazwa'] || null;
        this.model['region'] = params['region'] || null;

        this.atrybuty = [];

        this.kat.select_tree(this.model['kategoria']).subscribe(
          res => {
            this.kategorie = JSON.parse(res['_body']);
            this.kategorie.forEach(
              item => this.atrybuty.push.apply(this.atrybuty, JSON.parse(item.atrybuty))
            )},
          err => console.log(err)
        )
    })
  }
}
