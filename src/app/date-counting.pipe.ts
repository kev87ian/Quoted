import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCounting'
})
export class DateCountingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
