import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumePipes',
  standalone: true
})
export class SumePipesPipe implements PipeTransform {

  transform(value: number): string {
    let hours = Math.floor(value / 60).toString()
    let min = (value % 60).toString()
    let time = `${hours}г.${min}х.`
    return time
  }

}
