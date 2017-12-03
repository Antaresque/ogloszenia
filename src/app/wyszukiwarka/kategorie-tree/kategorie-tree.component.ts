import { Component, OnInit, Input } from '@angular/core';
import { KategorieService } from '../../_core/kategorie/kategorie.service';

@Component({
  selector: 'app-kategorie-tree',
  templateUrl: './kategorie-tree.component.html',
  styleUrls: ['./kategorie-tree.component.css']
})
export class KategorieTreeComponent implements OnInit {

  @Input() kat_id: number;
  kategorie: any = []
  podkategorie: any = []

  constructor(private kat: KategorieService) { }

  ngOnInit() {
    this.kat.select_tree(this.kat_id).subscribe(
      res => this.kategorie = JSON.parse(res['_body']),
      err => console.log(err)
    )
    this.kat.select_podrz(this.kat_id).subscribe(
      res => this.podkategorie = JSON.parse(res['_body']),
      err => console.log(err)
    )
  }

}
