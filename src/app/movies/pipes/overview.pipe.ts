import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overview',
})
export class OverviewPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    return value.slice(0, 200) + '...';
  }
}
