import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from 'src/app/Mailing/shared/Service/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  errorMessage = '';

  profileForm!: FormGroup;
  pwdPattern = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}";
  mobnumPattern = "^((\\+216-?)|0)?[0-9]{8}$"; 
  constructor(private toestar:ToastrService, private router: Router,private ser:AuthentificationService,private route: ActivatedRoute) { }
 
  ngOnInit(): void {

    this.profileForm = new FormGroup({
      'Name': new FormControl('',Validators.required),
      'Email': new FormControl(null,[Validators.required,Validators.email]),
      'Phone': new FormControl(null,[Validators.required,Validators.pattern(this.mobnumPattern)]),
      'password': new FormControl(null,[Validators.required,Validators.pattern(this.pwdPattern)]),
   
    });
  }
  onSubmit()
  {
    this.ser.register(this.profileForm.value.Name, this.profileForm.value.Email, this.profileForm.value.password,this.profileForm.value.Phone).subscribe(
      data => {
     
   
        this.router.navigate(['/'], {relativeTo: this.route});
        this.toestar.success("Register Succée");

      },
      err => {
        this.errorMessage = err.error.message;
        this.toestar.error(this.errorMessage);

      }
    );
console.log(this.profileForm.value);
  }
}
