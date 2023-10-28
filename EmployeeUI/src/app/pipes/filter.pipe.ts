import { Pipe, PipeTransform } from '@angular/core';
import {IEmployee} from "../Models/IEmployee";
import {DirectionType} from "../Types/common";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(employees: IEmployee[], field: keyof IEmployee | null, direction: DirectionType | null) {
    if(field === null)
      return employees;

    const result = employees.sort((a, b) => {
      if(a[field] > b[field]) return direction === "ASC" ? 1 : -1
      else return direction === "ASC" ? -1 : 1
    });
    return result
  }

}
