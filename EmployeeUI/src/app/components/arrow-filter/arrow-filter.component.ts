import {Component, Input} from '@angular/core';
import {IEmployee} from "../../Models/IEmployee";
import {DirectionType} from "../../Types/common";

@Component({
  selector: 'app-arrow-filter',
  templateUrl: './arrow-filter.component.html',
  styleUrls: ['./arrow-filter.component.css']
})
export class ArrowFilterComponent {
  @Input() field: keyof IEmployee | null
  @Input() filterField: keyof IEmployee | null
  @Input() direction: DirectionType | null
}
