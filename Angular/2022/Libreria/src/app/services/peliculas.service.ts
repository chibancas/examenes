import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGenero, IGeneros, IPelicula, IPeliculas } from '../Interfaces/Peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private api = 'https://api.themoviedb.org/3'; //parte fija de la URL a la API
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

  async getGeneros(): Promise<IGeneros> {
    const prefix = '/genre/movie/list';
    const url = `${this.api}/${prefix}`;
    return new Promise ( resolve => {
      this.http.get<IGeneros>(url, this.httpOptions)
        .subscribe (data => {
          console.log(data);
          resolve (data)
        })
    })
  }
  async getAll(page: number):Promise<IPeliculas>{
    const prefix = "discover/movie";
    const url = `${this.api}/${prefix}`;
    // console.log(page);
    // this.httpOptions.params.set('page', page);
    // console.log(this.httpOptions.params);
    return new Promise ( resolve => {
      this.http.get<IPeliculas>(url, this.httpOptions)
      .subscribe (data => {
        resolve( data )
      })
    })
  }




}
