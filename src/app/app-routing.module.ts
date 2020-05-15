import { NgModule} from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
const appRoutes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'EmployeeList', component: EmployeeListComponent }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
