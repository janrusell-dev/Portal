import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe',
  standalone: true
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any[], searchTerm?: string): any[] {
    if (!value) return [];
    if (!searchTerm) return value;

    searchTerm = searchTerm.toLowerCase();

    return value.filter(item => {
      // Get the first string property of the item
      const firstStringProperty = Object.values(item).find(val => typeof val === 'string');
      return firstStringProperty && firstStringProperty.toLowerCase().includes(searchTerm);
    });
  }

}
