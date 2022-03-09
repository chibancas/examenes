import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPelicula, IPeliculas } from '../Interfaces/Peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private url = 'https://api.themoviedb.org/3/discover/movie';
  private params =
    new HttpParams()
      .set('api_key', 'ce7492bc632fe837c18e798a5779b9aa')
      .set('page', 6)
      .set('language', 'es-ES');

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept' : 'application/json',
    }),
    params: this.params
  };
  constructor(private http: HttpClient) { }

  getEdad (edad: number){
    let fnac = 2022 - edad;
    return fnac;
  }
//getAll() es una función asyncrona espera xseg y
// devuelve una promesa cuyo resolv() son los datos que
//recibe de la API en el subscribe

  async getAll(page: number):Promise<IPeliculas>{
    console.log(page);
    this.httpOptions.params.set('page', page);
    console.log(this.httpOptions.params);
    return new Promise ( resolve => {
      this.http.get<IPeliculas>(this.url, this.httpOptions)
      .subscribe (data => {
        resolve( data )
      })
    })
  }
  async getAllPage():Promise<IPeliculas>{
    return new Promise ( resolve => {
      this.http.get<IPeliculas>(this.url, this.httpOptions)
      .subscribe (data => {
        resolve( data )
      })
    })
  }



  async getAll2(): Promise<any>{
    console.log('pelis');
    return new Promise ( resolve => {
      this.http.get(this.url, this.httpOptions)
        .subscribe (data => {
          console.log (data);
          resolve (data)
        })
    })
  }

  getAll1(){
    this.http.get(this.url, this.httpOptions) //4 peticion asincrona
      .subscribe (data => { // En data recibimos la RESPONSE de mi API //9
        console.log(data) // de 4 a 9 pasan x seg
      })
  }



}
