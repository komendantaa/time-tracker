import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spent'
})
export class SpentPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let hour = '00';
    let min = '00';
    let sec = '00';

    if (value < 10) {
      return '00:00:0' + value;
    }
    if (value < 3600) {
      if (value / 60 >= 1) {
        min = (value / 60).toString().split(/\./)[0];
        min = value / 60 < 10 ? '0' + min : min;
      }
      sec = value % 60 < 10 ? '0' + value % 60 : '' + value % 60;
      return `00:${min}:${sec}`;
    }
    hour = (value / 60 / 60).toString().split(/\./)[0];
    hour = value / 60 / 60 < 10 ? '0' + hour : hour;
    if (value / 60 % 60 >= 1) {
      min = (value / 60 % 60).toString().split(/\./)[0];
      min = value / 60 % 60 < 10 ? '0' + min : min;
    }
    sec = value % 60 < 10 ? '0' + value % 60 : '' + value % 60;
    return hour + ':' + min + ':' + sec;
  }
}
