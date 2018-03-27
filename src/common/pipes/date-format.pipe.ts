/**
 * Created by komendant on 18.03.2018.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
    
    transform(value: number, args?: any): string {
        let hour:string = '00';
        let min:string = '00';
        let sec:string = '00';

        if(value<10){
            return '00:00:0' + value
        }
        if(value<3600){
            if(value/60>=1) {
                min = (value/60).toString().split(/\./)[0];
                min = value/60<10 ? '0'+ min : min;
            }
            sec = value%60<10 ? '0'+value%60 : ''+value%60;
            return `00:${min}:${sec}`
        }
        hour = (value/60/60).toString().split(/\./)[0];
        hour = value/60/60<10 ? '0'+hour : hour;
        if(value/60%60>=1) {
            min = (value/60%60).toString().split(/\./)[0];
            min = value/60%60<10 ? '0'+min : min;
        }
        sec = value%60<10 ? '0'+value%60 : ''+value%60;
        return hour+':'+min+':'+sec;
    }
}