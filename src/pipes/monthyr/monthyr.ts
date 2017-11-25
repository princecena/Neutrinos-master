import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MonthyrPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'monthyr',
})
export class MonthyrPipe implements PipeTransform {
  /**
   *
   * @param value
   * @returns {string}
   */
  transform(value: number): string {
    return this.getWords(value);
  }
  getWords(monthCount: number): string {
    function getPlural(number, word) {
        return number === 1 && word.one || word.other;
    }
    var months = { one: 'Month', other: 'Months' },
        years = { one: 'Year', other: 'Years' },
        m = monthCount % 12,
        y = Math.floor(monthCount / 12),
        result = [];

    y && result.push(y + ' ' + getPlural(y, years));
    m && result.push(m + ' ' + getPlural(m, months));
    return result.join(' \n');
  }
}
