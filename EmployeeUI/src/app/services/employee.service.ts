import {Injectable } from '@angular/core';
import {IEmployee} from "../Models/IEmployee";
import {catchError, finalize, find, Observable, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IEmployeeCreateDto} from "../Models/Dto/IEmployeeCreateDto";
import {IEmployeeUpdateDto} from "../Models/Dto/IEmployeeUpdateDto";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient,
    public errorService: ErrorService,
  ) { }

  employees: IEmployee[]

  empToDeleteById = -1
  empToEditById = -1

  empToEdit: IEmployee | null = null;

  errorHandler(error: HttpErrorResponse){
    let er = error.message + " " + error.status
    this.errorService.handle(er)
    console.log(er)
    return throwError(er)
  }


  getAll(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>("https://localhost:7000/api/employees")
      .pipe(
        tap(value => this.employees = value),
        catchError(this.errorHandler.bind(this)),
      )
  }

  onCreate(newEmp: IEmployeeCreateDto) {
    return this.http.post<IEmployee>("https://localhost:7000/api/employees",newEmp)
      .pipe(
        tap(value => this.employees.push(value))
      )
  }

  onUpdate(updatedEmp: IEmployeeUpdateDto) {
    return this.http.put<IEmployee>(`https://localhost:7000/api/employees/${this.empToEditById}`, updatedEmp)
      .pipe(
        tap(updatedEmp => {
          this.employees = this.employees.map(emp => emp.employeeId === updatedEmp.employeeId ? updatedEmp : emp)
          this.empToEditById = -1
          this.empToEdit = null
        })
      )
  }

  onDelete() {
    return this.http.delete<boolean>(`https://localhost:7000/api/employees/${this.empToDeleteById}`)
      .pipe(
        tap(result => {
          this.employees = this.employees.filter(emp => emp.employeeId !== this.empToDeleteById)
          this.empToDeleteById = -1
        })
      )
  }

  selectEmpToEditById(id: number) {
    this.empToEditById = id;

    if(id === -1) {
      this.empToEdit = null;
      return;
    }

    this.empToEdit = this.employees.find(emp => emp.employeeId === id)!;
  }

  selectEmpToDeleteById(id: number) {
    this.empToDeleteById = id;
  }
}
