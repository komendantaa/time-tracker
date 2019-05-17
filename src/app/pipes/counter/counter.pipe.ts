import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let hour: string;
    let min: string;
    let sec: string;

    if (value < 10) {
      return value + ' sec';
    }
    if (value < 3600) {
      min = value / 60 >= 1 ? (value / 60).toString().split(/\./)[0] + ' min' : '';
      sec = value % 60 + ' sec';
      return min + ' ' + sec;
    }

    hour = value / 60 / 60 >= 1 ? (value / 60 / 60).toString().split(/\./)[0] + ' h' : '';
    min = value / 60 % 60 >= 1 ? (value / 60 % 60).toString().split(/\./)[0] + ' min' : '0 min';
    sec = value % 60 + ' sec';
    return hour + ' ' + min + ' ' + sec;
  }
}
