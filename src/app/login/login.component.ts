import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { IEmployee } from '../registration/employee';
import { Employee } from '../Models/Employee';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  
  constructor(
    private _employeeService: RegistrationService,
    private fb: FormBuilder,
    private _router:Router
    ) { }
 loginStatus:string
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
    
    this._employeeService.CheckRegistration(this.employee.userName,this.employee.password)
    .subscribe(res=>{sessionStorage.setItem('username', this.employee.userName),sessionStorage.setItem('password', this.employee.password);this._router.navigate(['EmployeeList'])},err=>{ this.loginStatus="Loging in Failed: User Name or Password incorrect!"   });
  }
}
