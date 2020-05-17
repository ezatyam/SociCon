import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { IEmployee } from '../registration/employee';
import { Employee } from '../Models/Employee';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  
  constructor(private _employeeService: RegistrationService,private fb: FormBuilder) { }
 
  employee:Employee={
    firstName:null,
    lastName:null,
    userName:null,
    password:null,
    emailId:null,
    phoneNumber:null,
    id:null

  }

  empoyees:IEmployee
  
  ngOnInit() {
    this.login = this.fb.group({
      
      userName: [this.employee.userName],
      password: [this.employee.password],
      
    })
  }
  
  onsubmit():void{
    //console.log(this.employee)
    this._employeeService.CheckRegistration(this.employee.userName)
    .subscribe();
  }
}
