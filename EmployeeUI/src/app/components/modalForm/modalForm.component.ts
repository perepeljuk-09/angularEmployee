import {Component, Input, OnInit } from '@angular/core';
import {ModalFormService} from "../../services/modalForm.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IEmployee} from "../../Models/IEmployee";
import {EmployeeService} from "../../services/employee.service";
import {IEmployeeUpdateDto} from "../../Models/Dto/IEmployeeUpdateDto";
import {IEmployeeCreateDto} from "../../Models/Dto/IEmployeeCreateDto";

@Component({
  selector: 'app-modalForm',
  templateUrl: './modalForm.component.html',
  styleUrls: ['./modalForm.component.css']
})
export class ModalFormComponent implements OnInit {
  constructor(
    public modalFormService: ModalFormService,
    public employeeService: EmployeeService,
  ) {

  }

  @Input() selectedEmpToEdit: IEmployee | null

  formData: FormGroup


  ngOnInit(): void {
    this.formData = new FormGroup({
      department: new FormControl<string>(this.selectedEmpToEdit?.department ?? '',[
        Validators.required
      ]),
      firstName: new FormControl<string>(this.selectedEmpToEdit?.firstName ?? '',[
        Validators.required
      ]),
      lastName: new FormControl<string>(this.selectedEmpToEdit?.lastName ?? '',[
        Validators.required
      ]),
      patronomyc: new FormControl<string>(this.selectedEmpToEdit?.patronomyc ?? '',[
        Validators.required
      ]),
      birthday: new FormControl<string>(this.selectedEmpToEdit?.birthday ?? '',[
        Validators.required
      ]),
      dateOfEmployment: new FormControl<string>(this.selectedEmpToEdit?.dateOfEmployment ?? '',[
        Validators.required
      ]),
      salary: new FormControl<number>(this.selectedEmpToEdit?.salary ?? 0,[
        Validators.required
      ]),
    })
  }

  get department() {
    return this.formData.controls.department as FormControl<string>
  }
  get firstName() {
    return this.formData.controls.firstName as FormControl<string>
  }
  get lastName() {
    return this.formData.controls.lastName as FormControl<string>
  }
  get patronomyc() {
    return this.formData.controls.patronomyc as FormControl<string>
  }
  get birthday() {
    return this.formData.controls.birthday as FormControl<string>
  }
  get dateOfEmployment() {
    return this.formData.controls.dateOfEmployment as FormControl<string>
  }
  get salary() {
    return this.formData.controls.salary as FormControl<number>
  }

  onClose() {
    this.employeeService.selectEmpToEditById(-1)
    this.modalFormService.close()
  }

  private checkOnError = () => this.department.errors || this.firstName.errors || this.lastName.errors || this.patronomyc.errors || this.birthday.errors || this.dateOfEmployment.errors || this.salary.errors

  onCreate() {

    const err = this.checkOnError()

    console.log(err)
    if(err) return;
    // logic create

    const newEmp: IEmployeeCreateDto = {
      department: this.department.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      birthday: this.birthday.value,
      patronomyc: this.patronomyc.value,
      dateOfEmployment: this.dateOfEmployment.value,
      salary: this.salary.value
    }

    this.employeeService.onCreate(newEmp).subscribe(res =>{
      this.modalFormService.close()
    })
  }

  onUpdate() {

    const err = this.checkOnError()

    console.log(err)
    if(err) return;

    // logic update

    const updateEmp: IEmployeeUpdateDto = {
      department: this.department.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      birthday: this.birthday.value,
      patronomyc: this.patronomyc.value,
      dateOfEmployment: this.dateOfEmployment.value,
      salary: this.salary.value
    }

    this.employeeService.onUpdate(updateEmp).subscribe(() =>{
      this.modalFormService.close()
    })

  }
}
