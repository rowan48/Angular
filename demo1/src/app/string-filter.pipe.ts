import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringFilter'
})
export class StringFilterPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    const result = value.filter((value)=>{
      return value.search("esraa");
    });

    return result;
  }

}
