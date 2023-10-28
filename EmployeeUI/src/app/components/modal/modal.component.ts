import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(
    public modalService: ModalService,
    public employeeService: EmployeeService,
  ) { }

  onConfirmDelete() {
    this.employeeService.onDelete()
      .subscribe(() => {
        this.modalService.close()
      })
  }
}
