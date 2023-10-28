import {IEmployee} from "../IEmployee";

export interface IEmployeeCreateDto extends Omit<IEmployee, "employeeId"> {
  department: string;
  firstName: string;
  lastName: string;
  patronomyc: string;
  birthday: string;
  dateOfEmployment: string;
  salary: number;
}
