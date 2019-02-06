import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = "Edilberto";

  nombre2 = "edilBerto marrugo gutiérrez"

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion:{
      calle: "Primera",
      casa: "19"
    }
  }

  valorDeLaPromesa = new Promise( (resolve,reject)=>{

    setTimeout( ()=>resolve('Llego la data'), 3500 );

  } );

  fecha = new Date();

  video = "NiFVPh-wcl0";

  activar:boolean = true;
}
