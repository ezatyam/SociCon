import { Injectable } from '@angular/core';
import { IEmployee } from './registration/employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map'
import { Employee } from './Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  
  constructor(private _http: Http) { }

  getRegistration(): Observable<IEmployee[]> {
    return this._http.get("https://localhost:5001/api/Registration")
      .map((response: Response) => <IEmployee[]>response.json());
    //[
    //  { FirstName: "Test first name 1", LastName: "Test FirstName name", Gender: "Male", Phone: "1111111e", Email: "Email", SecurityQuestion: "What is your Birthdate?", Answer: "Test Answer", Password: "Password", }
    //  , { FirstName: "Test first name 2", LastName: "Test FirstName name", Gender: "Male", Phone: "1111111e", Email: "Email", SecurityQuestion: "What is your Birthdate?", Answer: "Test Answer", Password: "Password", }
    //  , { FirstName: "Test first name 3", LastName: "Test FirstName name", Gender: "Male", Phone: "1111111e", Email: "Email", SecurityQuestion: "What is your Birthdate?", Answer: "Test Answer", Password: "Password", }
    //]
  }

  CheckRegistration(emp:string):Observable <Employee>  {
    return this._http.get("https://localhost:5001/api/Registration/"+emp)
      .map((response: Response) => <Employee>response.json());
    //[
    //  { FirstName: "Test first name 1", LastName: "Test FirstName name", Gender: "Male", Phone: "1111111e", Email: "Email", SecurityQuestion: "What is your Birthdate?", Answer: "Test Answer", Password: "Password", }
    //  , { FirstName: "Test first name 2", LastName: "Test FirstName name", Gender: "Male", Phone: "1111111e", Email: "Email", SecurityQuestion: "What is your Birthdate?", Answer: "Test Answer", Password: "Password", }
    //  , { FirstName: "Test first name 3", LastName: "Test FirstName name", Gender: "Male", Phone: "1111111e", Email: "Email", SecurityQuestion: "What is your Birthdate?", Answer: "Test Answer", Password: "Password", }
    //]
  }
}
