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
        this.model['sort'] = params['sort'] || null;
        this.model['dir'] = params['dir'] || null;
        this.model['page'] = params['page'] || null;
        this.model['num'] = params['num'] || null;

        let id_kat = this.model['kategoria'];

        this.kat.select_tree(id_kat).subscribe(
          res => this.kategorie = res,
          err => console.log(err)
        )
        if(id_kat == null){
          this.kat.select_all().subscribe(
            res => this.podkategorie = res,
            err => console.log(err)
          )
        }
        else{
          this.kat.select_podrz(id_kat).subscribe(
            res => this.podkategorie = res,
            err => console.log(err)
          )
        }
    });
  }

  search(id){
    this.router.navigate(['/wyszukiwarka'], {queryParams: {kategoria: id}, queryParamsHandling: 'merge'});
  }
}
