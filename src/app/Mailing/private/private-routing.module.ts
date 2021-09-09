import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboredComponent } from './dashbored/dashbored.component';
import { ListemployerComponent } from './listemployer/listemployer.component';
import { MailingComponent } from './mailing/mailing.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { SmsComponent } from './sms/sms.component';

const routes: Routes = [

  {
    path:'',
    component:DashboredComponent   
    
  },
  {
    path:'listemployer',
    component:ListemployerComponent   
    
  },
  {
    path:'mailing',
    component:MailingComponent   
    
  },
  {
    path:'maps',
    component:MapsComponent   
    
  },
  {
    path:'notification',
    component:NotificationComponent   
    
  },
  {
    path:'profile',
    component:ProfileComponent   
    
  },
  {
    path:'sms',
    component:SmsComponent   
    
  },
  {
    path:'sendmail',
    component:SendmailComponent   
    
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full' 
  },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
