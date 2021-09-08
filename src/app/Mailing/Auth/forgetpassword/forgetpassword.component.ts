import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor() { }
  profileForm!: FormGroup;

  ngOnInit(): void {

    this.profileForm = new FormGroup({
       'Email': new FormControl(null,[Validators.required,Validators.email]),
    
    
    });
  }
  onSubmit()
  {
console.log(this.profileForm.value);
  }
}