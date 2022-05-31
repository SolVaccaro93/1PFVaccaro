import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesPrueba'
})
export class PipesPruebaPipe implements PipeTransform {

  
  transform(value: string[], args: any[]): string[] {
    return value.filter(item => item.includes(args[0]));
  }

}
