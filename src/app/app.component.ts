import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  values: string[] = ['Male', 'Female'];
  firstName: string; 
  email: string;
  gender: string; 
  message: string;  
  sendName: string;
  sendEmail: string;
  sendGen: string;  
  constructor(){
    this.firstName ='';
    this.email ='';
    this.gender = '';
    this.message = '';
    this.sendEmail ='';
    this.sendName = '';
    this.sendGen = '';
  }
  getResponse($event: any) {  
    this.message = $event;  
  }  
  submit() {  
    this.sendName = this.firstName; 
    this.sendEmail = this.email;
    this.sendGen = this.gender;
    
  }  
}