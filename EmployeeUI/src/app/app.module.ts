import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ModalComponent } from './components/modal/modal.component';
import { TableComponent } from './components/table/table.component';
import { ModalFormComponent } from './components/modalForm/modalForm.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FilterPipe } from './pipes/filter.pipe';
import { ArrowFilterComponent } from './components/arrow-filter/arrow-filter.component';
import {PagenotfoundComponent} from "./components/pagenotfound/pagenotfound.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    EmployeesComponent,
    ModalComponent,
    TableComponent,
    ModalFormComponent,
    FilterPipe,
    ArrowFilterComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
