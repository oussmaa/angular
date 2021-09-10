import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SendMailService } from '../../shared/Service/send-mail.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {

  mobnumPattern = "^((\\+216-?)|0)?[0-9]{8}$"; 

 profileForm!: FormGroup;

  constructor(private service :SendMailService,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      'Description': new FormControl(null,Validators.required),
       'Phone': new FormControl(null,[Validators.required,Validators.pattern(this.mobnumPattern)]),
    
    });
  }
  onSubmit()
  {

    this.service.SendMessagePhone("+216"+this.profileForm.value.Phone,this.profileForm.value.Description).subscribe
    (
data =>
{
  this.toaster.success("Message Send");
},
err=>{
  this.toaster.error("Message Not Send");

}

    )
  }

}
