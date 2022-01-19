// importar nuevas clases ---> aquellas clases que en su definición tengan un export
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'La Mamola';
  title1 = 'Inmobiliaria';
  edad: number = 18;
  edad1 = 18;


  constructor() {
    this.edad1 = 45;
    this.listar();
    // setInterval(() => {
    //   this.edad = this.edad + 1;
    // }, 1000)
    setInterval(this.contador, 1000);
  }
  // funciones/métodos de clase (nuevo, listar ...)

  contador() {
    console.log('contador');
    this.edad1 = this.edad1 + 1;
    console.log(this.edad1);
  }

  private listar() {

  }

  protected eliminar(){

  }
}
