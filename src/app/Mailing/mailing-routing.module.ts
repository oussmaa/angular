import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './Auth/forgetpassword/forgetpassword.component';

const routes: Routes = [

  {
    path:'',
    loadChildren:()=>import('./Auth/login/login.module').then(m=>m.LoginModule),
     
    
},
{
  path:'dashbored',
  loadChildren:()=>import('./private/private.module').then(m=>m.PrivateModule),
   
  
},
{
  path:'register',
  loadChildren:()=>import('./Auth/register/register.module').then(m=>m.RegisterModule),
   
  
},
{
  path:'forgetpassword',
  component:ForgetpasswordComponent   
  
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
export class MailingRoutingModule { }
