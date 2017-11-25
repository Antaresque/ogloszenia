import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wyszukiwarka',
  templateUrl: './wyszukiwarka.component.html',
  styleUrls: ['./wyszukiwarka.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WyszukiwarkaComponent implements OnInit {

  sub: any;
  kategoria: string;
  nazwa: string;
  region: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(
      params => {
        this.kategoria = params['kategoria'] || null;
        this.nazwa = params['nazwa'] || null;
        this.region = params['region'] || null;
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
