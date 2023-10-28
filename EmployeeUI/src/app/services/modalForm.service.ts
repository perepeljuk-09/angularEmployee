import { Injectable, Input} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ModalService} from "./modal.service";
import {IEmployee} from "../Models/IEmployee";

@Injectable({
  providedIn: 'root'
})
export class ModalFormService extends ModalService{

  @Input() employeeData: IEmployee | null
}
