import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../servicios/heroes.service.service';
import { Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSelecionado: EventEmitter<number>;
  constructor(private router: Router) {
    this.heroeSelecionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe() {
    this.router.navigate(['/heroe', this.index]);
    // this.heroeSelecionado.emit(this.index);
  }

}
