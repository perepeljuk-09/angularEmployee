import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisable$ = new BehaviorSubject<boolean>(false)

  open() {
    this.isVisable$.next(true)
  }

  close() {
    this.isVisable$.next(false)
  }
}
