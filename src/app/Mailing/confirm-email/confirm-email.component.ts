import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from '../shared/Service/authentification.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {
 
  constructor(private toaster:ToastrService,private route: ActivatedRoute,private service:AuthentificationService) { }

  ngOnInit(): void {
    
    let id = this.route.snapshot.params.id;

  

    console.log(id);
    this.service.udateUserVerife(id).subscribe(

      data=>{
console.log(data)
      },
      err=>{

      }
    )

}
}
