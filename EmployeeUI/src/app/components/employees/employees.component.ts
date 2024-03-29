import {Component, OnInit} from '@angular/core';
import { ModalService } from '../../services/modal.service';
import {ModalFormService} from "../../services/modalForm.service";
import {EmployeeService} from "../../services/employee.service";
import {FilterService} from "../../services/filter.service";
import {ErrorService} from "../../services/error.service";
import {finalize} from "rxjs";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  constructor(
    public employeeService: EmployeeService,
    public modalServiceDelete: ModalService,
    public modalFormService: ModalFormService,
    public filterService: FilterService,
    public errorService: ErrorService,
  ) {}

  isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.employeeService.getAll().subscribe(res => {},
      () => {},
      () => {
      this.isLoading = false
      })

  }

  onEdit() {

  }

}
