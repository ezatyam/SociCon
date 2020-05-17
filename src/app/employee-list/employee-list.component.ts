import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup} from '@angular/forms'
import { IEmployee } from '../registration/employee';
import { RegistrationService } from '../registration.service';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [RegistrationService]
})
export class EmployeeListComponent implements OnInit {
  employees:  IEmployee[];
  
  selectEmployeeCountRadioButton: string = 'All'

  constructor(private _employeeService: RegistrationService,
    private _router:Router,
        
    ) {
    //this.employees = this._employeeService.getRegistration();
  }
  users:string;
  ngOnInit() {
    const usernames=sessionStorage.getItem('username')
    this.users=usernames;
    if (sessionStorage.getItem('username'))
    {
    this._employeeService.getRegistration()
      .subscribe((employeedata) => this.employees = employeedata)
      //console.log([usernames])
    }else{
      this._router.navigate(['../login'])
    }
  }
  getTotalEmployeeCount(): number {
    //return this.employees.length;
    return 0
  }

  editdata(id:string){
    localStorage.setItem('id',id)
    this._router.navigate(['../Home'])
  }

}
