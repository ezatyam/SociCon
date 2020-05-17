import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Key } from 'protractor';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registration: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //this.registration = new FormGroup({
    //  FirstName: new FormControl(),
    //  LastName: new FormControl(),
    //  Gender: new FormControl(),
    //  Phone: new FormControl(),
    //  Email: new FormControl(),
    //  SecurityQuestion: new FormControl(),
    //  Answer: new FormControl(),
    //  Password: new FormControl(),
    //})
    this.registration = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['',Validators.required],
      Gender: ['', Validators.required],
      Phone: ['',Validators.required],
      Email: ['',Validators.required],
      SecurityQuestion: ['',Validators.required],
      Answer: ['',Validators.required],
      Password: ['',Validators.required],
    })
  }

  logKeyValuePairs(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logKeyValuePairs(abstractControl);
        
      } else {
        console.log('Key=' + key + ' value =' + abstractControl.value);
        //abstractControl.disable()
      }
    });
  }

  onLoadDataClick(): void {
    //this.registration.setValue({
    //  FirstName: "Test first name",
    //  LastName: "Test FirstName name",
    //  Gender: "Male",
    //  Phone: "1111111e",
    //  Email: "Email",
    //  SecurityQuestion: "What is your Birthdate?",
    //  Answer: "Test Answer",
    //  Password: "Password",
    //})
    this.logKeyValuePairs(this.registration)
  }
  onsubmit(): void {
    console.log(this.registration.value)
  }

}
