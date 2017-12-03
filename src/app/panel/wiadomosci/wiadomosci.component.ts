import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiadomosci',
  templateUrl: './wiadomosci.component.html',
  styleUrls: ['./wiadomosci.component.css']
})
export class WiadomosciComponent implements OnInit {

  active: any;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.active = this.route.firstChild.snapshot.routeConfig.path;

    this.router.events.subscribe(
      (event) => this.active = this.route.firstChild.snapshot.routeConfig.path
    );
  }

}
