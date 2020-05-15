import { Component, OnInit } from '@angular/core';

import { IEmployee } from '../registration/employee';
import { RegistrationService } from '../registration.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [RegistrationService]
})
export class EmployeeListComponent implements OnInit {
  employees:  IEmployee[];
  selectEmployeeCountRadioButton: string = 'All'

  constructor(private _employeeService: RegistrationService) {
    //this.employees = this._employeeService.getRegistration();
  }

  ngOnInit() {
    this._employeeService.getRegistration()
      .subscribe((employeedata) => this.employees = employeedata)
  }
  getTotalEmployeeCount(): number {
    //return this.employees.length;
    return 0
  }
}
