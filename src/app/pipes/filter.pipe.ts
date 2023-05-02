import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[], key:any, category:any):any{

    if(key) {
      return value.filter((data)=> data[category].toLocaleLowerCase().includes(key.toLocaleLowerCase()))
    }else{
      return value
    }
  }
}
