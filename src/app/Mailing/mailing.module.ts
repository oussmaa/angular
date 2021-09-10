import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailingRoutingModule } from './mailing-routing.module';
import { ForgetpasswordComponent } from './Auth/forgetpassword/forgetpassword.component';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
 


@NgModule({
  declarations: [
    ForgetpasswordComponent,
    ConfirmEmailComponent
  ],
  imports: [
    CommonModule,
    MailingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MailingModule { }
