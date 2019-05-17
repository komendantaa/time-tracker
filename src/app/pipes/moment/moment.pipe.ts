import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {
  transform(date, exportFormat: string) {
    const isUnix = !isNaN(date) && (date + '').length <= 10;
    // return date ? moment(+new Date(date) + new Date(date).getTimezoneOffset() * 60 * 1000).format(format) : '' // Timezone
    return date ? moment(new Date(isUnix ? date * 1000 : date)).format(exportFormat) : '';
  }
}
