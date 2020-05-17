import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';

import {DashBoardComponent} from './dash-board/dash-board.component'

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,    
    EmployeeListComponent,
    LoginComponent,    
    HomeComponent,
    DashBoardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
