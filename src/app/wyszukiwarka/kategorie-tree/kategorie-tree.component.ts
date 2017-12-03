import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { KategorieService } from '../../_core/kategorie/kategorie.service';

@Component({
  selector: 'app-kategorie-tree',
  templateUrl: './kategorie-tree.component.html',
  styleUrls: ['./kategorie-tree.component.css']
})
export class KategorieTreeComponent implements OnInit {

  model: any = {}
  kategorie: any = []
  podkategorie: any = []

  constructor(private route: ActivatedRoute, private router: Router, private kat: KategorieService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.model['kategoria'] = params['kategoria'] || null;
        this.model['nazwa'] = params['nazwa'] || null;
        this.model['region'] = params['region'] || null;

        this.kat.select_tree(this.model['kategoria']).subscribe(
          res => this.kategorie = JSON.parse(res['_body']),
          err => console.log(err)
        )
        this.kat.select_podrz(this.model['kategoria']).subscribe(
          res => this.podkategorie = JSON.parse(res['_body']),
          err => console.log(err)
        )
    });
  }

  search(id: any){
    if(this.model.kategoria == "") this.model.kategoria = null;
    this.router.navigate(['/wyszukiwarka'], {queryParams: {nazwa: this.model.nazwa, kategoria: this.model.kategoria}});
  }
}
