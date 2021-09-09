import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BehaviorSubject } from 'rxjs';
import { SocketService } from 'src/app/socket.service';
import { Message } from '../../shared/Model/Message';

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.css']
})
export class MailingComponent implements OnInit {

  constructor(private ser:SocketService) { }

  public messages1:Message[]=[] ;


  ngOnInit(): void {
this.GetMessage();

  }
  GetMessage()
  {
    this.messages1=this.ser.getmessage();
    let bSubject = new BehaviorSubject(this.messages1); 

bSubject.next(this.messages1);

bSubject.subscribe(value => {
  console.log("Subscription got", value);  
});

  }
 
}