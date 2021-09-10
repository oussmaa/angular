import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  
  isLogin = false;

  roleAs!: string;

 
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json',
      
    })
  }
  constructor(private httpClient: HttpClient) {


  }
 
  register(username: string, email: string, password: string,numero:string): Observable<any> {
    return this.httpClient.post("http://localhost:8065/api/auth/signup", {
      username,
      email,
      password,
      numero,
      image:'',
      roles:'Client',
      verife:false
    }, this.httpOptions);
    
  }
  login(email: string, password: string) {  

    return this.httpClient.post<any>("http://localhost:8065/api/auth/signin",
     {email,password},this.httpOptions );
 
  }
  saveToken(token:any)
  {
     localStorage.setItem("accessToken",token)
    return true;
  }
  loggedIn() {

    return !!localStorage.getItem('accessToken') ;

}
logout()
{
localStorage.removeItem("accessToken")
 }
getToken() {
  return localStorage.getItem('accessToken');
}

udateUserVerife(id:string): Observable<any> {
  return this.httpClient.put("http://localhost:8065/api/auth/updateverife/"+id, 
  
   this.httpOptions);
  
}
}