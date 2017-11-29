import { Wojewodztwa } from './../_core/ogloszenia/wojewodztwa.class';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model: any = {}
  wojewodztwa = Wojewodztwa.wojewodztwa;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(){
    this.router.navigate(['/wyszukiwarka'], {queryParams: {nazwa: this.model.nazwa}});
  }

}
