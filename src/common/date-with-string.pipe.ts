/**
 * Created by komendant on 18.03.2018.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateWithString'
})
export class DateWithStringPipe implements PipeTransform {
    transform(value: number, args?: any): string {

        let hour:string = '00';
        let min:string = '00';
        let sec:string = '00';
        
        if(value<10){
            return value + ' sec'
        }
        if(value<3600){
            min = value/60>=1 ? (value/60).toString().split(/\./)[0]+' min' : '';
            sec = value%60+' sec';
            return min+' '+sec
        }

        hour = value/60/60>=1 ? (value/60/60).toString().split(/\./)[0]+' h' : '';
        min = value/60%60>=1 ? (value/60%60).toString().split(/\./)[0]+' min' : '0 min';
        sec = value%60+' sec';
        return hour+' '+min+' '+sec;
    }
}