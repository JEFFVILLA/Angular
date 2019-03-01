import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesServiceService } from '../../servicios/heroes.service.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;
  constructor( private activatedRouter: ActivatedRoute, private heroesService: HeroesServiceService, private router: Router) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe( params => {
        // tslint:disable-next-line:no-string-literal
        this.termino = params['termino'];
        // tslint:disable-next-line:no-string-literal
        this.heroes = this.heroesService.buscarHeroes(params['termino']);
    });
  }

  verHeroe( idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
