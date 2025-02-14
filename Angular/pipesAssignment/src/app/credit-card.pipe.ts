import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
  standalone: false
})
export class CreditCardPipe implements PipeTransform {

  transform(value: number, ...args: number[]): string {
    let maskedvalue=String(value).slice(0,-4).replace(/\d/g, '*');
    let unmaskedvalue=String(value).slice(-4);
    return `${maskedvalue}${unmaskedvalue}`
  }
  

}
