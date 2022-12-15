import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform {
    transform(
        valor: string, 
        enMayuscula: boolean = true): string {
        //if(enMayuscula === true) {
        //return valor.toUpperCase();
        //} else {
        //    return valor.toLocaleLowerCase();
        //}
        return (enMayuscula) 
        ? valor.toUpperCase(): 
        valor.toLocaleLowerCase();
    }
}

