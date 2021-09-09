import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NotfoundComponent } from './Mailing/shared/Components/notfound/notfound.component';
import { LoggerInterceptor } from './Mailing/shared/Guards/logger.interceptor';
import { NgxChartsModule } from '@swimlane/ngx-charts';
 
@NgModule({
  declarations: [
    AppComponent,
   
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,  
    ToastrModule.forRoot(),
    NgxChartsModule,
     BrowserAnimationsModule
 
   
    
     
  ],
  providers: [
{provide:HTTP_INTERCEPTORS,useClass:LoggerInterceptor,multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
