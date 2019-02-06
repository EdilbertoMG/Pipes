import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {
  

  transform(value: string, validar: boolean = true):string {

   if (validar) {

     let salida:string = "";

     for (let i = 0; i <= value.length; i++) {

       salida = salida + "*";
       
     }
     return salida;
   }else{
     return value;
   }
    
  
  }
}
