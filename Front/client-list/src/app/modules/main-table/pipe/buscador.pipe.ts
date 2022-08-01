import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(value: any, campo:string, args: string): any {
    if(!value)return null;
    if(!args)return value;
    if(args.length < 2 )return value;

    // return value.filter( (resultado: any) =>
    //   resultado.campo.toLowercase().includes(args)
    // );
    return value.filter((singleItem: any) =>
      singleItem[campo].toLowerCase().includes(args)
      );
  }

}
