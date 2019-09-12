import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthserviceService} from './authservice.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private auth:AuthserviceService){}
  submitted:boolean = false;
  form: FormGroup = new FormGroup({
    emailId: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required),
  });

  get email(){
    return this.form.get('emailId');
  }
  get password(){
    return this.form.get('password');
  }
  submit() {
    this.submitted = true;
    this.auth.verify(this.form.value)
    .subscribe(result=>{console.log(result)});

  }
}
