import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Key } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = '';
  key = '3ff39c8ce050653bbe5195373e719f86';
  constructor(private httpClient: HttpClient ) {
    this.url = 'https://api.openweathermap.org/data/2.5/weather?appid=' + this.key + '&units=metric&q=';
   }

   getTemperatura(cuidad: string) {
    return this.httpClient.get(this.url + cuidad);
   }
}
