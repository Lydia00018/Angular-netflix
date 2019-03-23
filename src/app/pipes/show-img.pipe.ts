import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showImg'
})
export class ShowImgPipe implements PipeTransform {
  urlImages = 'https://image.tmdb.org/t/p/original/';
  transform(value: any, args?: any): any {
    return this.urlImages + value;
  }

}
