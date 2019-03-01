import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServiceService, Heroe } from '../../servicios/heroes.service.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe: any = {};
  // tslint:disable-next-line:variable-name
  constructor( private activatedoroute: ActivatedRoute, private _heroesService: HeroesServiceService) {
     this.activatedoroute.params.subscribe(parans => {
        // tslint:disable-next-line:no-string-literal
        this.heroe = this._heroesService.getHeroe(parans['id']);

     });
   }

}
