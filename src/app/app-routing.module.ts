import { NgModule} from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import {DashBoardComponent} from './dash-board/dash-board.component'

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  
  { path: 'EmpdashBoard', component: DashBoardComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'EmployeeList', component: EmployeeListComponent },
  { path: 'Home', component:HomeComponent },
  
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
