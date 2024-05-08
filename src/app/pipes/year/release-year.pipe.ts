import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'releaseYear',
})
export class ReleaseYearPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    return value.split('-')[0];
  }
}
