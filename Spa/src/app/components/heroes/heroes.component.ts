import { Component, OnInit } from '@angular/core';
import { HeroesServiceService, Heroe } from '../../servicios/heroes.service.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] =  [];
  // tslint:disable-next-line:variable-name
  constructor(private _heroesSesrvice: HeroesServiceService, private router: Router) {}

  ngOnInit() {
    this.heroes = this._heroesSesrvice.getHeroes();
    console.log(this.heroes);
  }

  verHeroe( idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
