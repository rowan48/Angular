import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringReplace'
})
export class StringReplacePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    var replaced = value.split('-').join(' ');
    return replaced;
  }

}
