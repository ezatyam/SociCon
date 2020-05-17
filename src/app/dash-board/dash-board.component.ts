import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { stringify } from 'querystring';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  employees:Employee={
    firstName:null,
    lastName:null,
    userName:null,
    password:null,
    emailId:null,
    phoneNumber:null,
    id:null

  }

  constructor(
    private _employeeService: RegistrationService,
    private fb: FormBuilder,
    private _router:RouterModule
  ) { }
  UserName:string
  Password:string
  ngOnInit() {
    const uname=sessionStorage.getItem('username');
    const psw=sessionStorage.getItem('password');
    this.UserName=uname;
    this.Password=psw;
    this._employeeService.CheckRegistration(this.UserName,this.Password)
    .subscribe((employeedata) => this.employees = employeedata)
  }

}
