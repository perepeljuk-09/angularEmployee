import { Component, Input } from '@angular/core';
import { IEmployee } from '../../Models/IEmployee';
import { ModalService } from '../../services/modal.service';
import {ModalFormService} from "../../services/modalForm.service";
import {EmployeeService} from "../../services/employee.service";
import {FilterService} from "../../services/filter.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  constructor(
    public employeeService: EmployeeService,
    public modalServiceDelete: ModalService,
    public modalFormService: ModalFormService,
    public filterService: FilterService,
  ) { }

  @Input() employees: IEmployee[]

  onSelectEmpToDeleteById(id: number) {
    this.employeeService.selectEmpToDeleteById(id);
    this.modalServiceDelete.open()
  }
  onSelectEmpToEditById(id: number) {
    this.employeeService.selectEmpToEditById(id);
    this.modalFormService.open()
  }



}
