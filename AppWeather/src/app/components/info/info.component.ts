import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

declare var swal: any;
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  clima;
  constructor( private climaService: ClimaService ) { }
  icono: string = '';

  ngOnInit() {
  }

  ingresarLocalizacion(cuidad: HTMLInputElement) {
    if (cuidad.value) {
    this.getClima(cuidad.value);
    cuidad.value = '';
    } else {
    swal ( 'Error' ,  'Complete fields!' ,  'error' );

    }
    cuidad.focus();
    return false;
    }

    getClima(cuidad: string) {
      this.climaService.getTemperatura(cuidad)
        .subscribe(
          res => {this.clima = res;
                  this.icono = "http://openweathermap.org/img/w/" + this.clima.weather[0].icon + ".png";
          },
          err => swal ( 'Error' ,  'City no found!' ,  'error' )
        );
    }
}
