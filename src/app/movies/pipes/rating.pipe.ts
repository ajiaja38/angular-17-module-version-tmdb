import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
})
export class RatingPipe implements PipeTransform {
  transform(value: number, ...args: number[]): string {
    return value.toFixed(1);
  }
}
