import { Injectable } from '@angular/core';
import {IEmployee} from "../Models/IEmployee";
import {DirectionType} from "../Types/common";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  field: keyof IEmployee | null
  direction: DirectionType | null

  setFilter(newField: keyof IEmployee){

    if(this.field === null || this.field !== newField){
      this.field = newField
      this.direction = "ASC"
    } else if (this.field === newField && this.direction === "ASC") {
      this.direction = "DESC"
    } else {
      this.field = null
      this.direction = null
    }
  console.log("new field >", this.field, "new direction >", this.direction)
  }
}
