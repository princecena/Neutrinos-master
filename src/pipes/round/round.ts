import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the RoundPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'round',
})
export class RoundPipe implements PipeTransform {
    /**
     *
     * @param value
     * @returns {string}
     */
    transform(value: number): string {
        return value.toFixed(1);
    }
}
