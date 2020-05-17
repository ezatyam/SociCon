import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/Employee';
import { RegistrationService } from '../registration.service';
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _employeeService: RegistrationService,
    private fb: FormBuilder,
    private _router:RouterModule
  ) { }
  employees:Employee={
    firstName:null,
    lastName:null,
    userName:null,
    password:null,
    emailId:null,
    phoneNumber:null,
    id:null

  }
  id:string
  
  ngOnInit() {
    const ids= localStorage.getItem('id');
    
    this.id= ids;
    
    this._employeeService.GetRegistrationbyId(this.id)
    .subscribe((employeedata) => this.employees = employeedata)
    
  }

}
