import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'partners'
})
export class PartnersPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
