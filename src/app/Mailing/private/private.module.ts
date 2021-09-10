import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboredComponent } from './dashbored/dashbored.component';
import { ListemployerComponent } from './listemployer/listemployer.component';
import { MailingComponent } from './mailing/mailing.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { SmsComponent } from './sms/sms.component';
import { NavprivateComponent } from './navprivate/navprivate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SendmailComponent } from './sendmail/sendmail.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageSendeComponent } from './message-sende/message-sende.component';
import { EmailDetailleComponent } from './email-detaille/email-detaille.component';
 
   @NgModule({
  declarations: [
    DashboredComponent,
    ListemployerComponent,
    MailingComponent,
    SmsComponent,
    MapsComponent,
    NotificationComponent,
    ProfileComponent,
    NavprivateComponent,
    SendmailComponent,
    MessageSendeComponent,
    EmailDetailleComponent,
     
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,ReactiveFormsModule,AngularEditorModule  ,NgxChartsModule,
    HttpClientModule
      

  ]
})
export class PrivateModule { }
