import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json',
      
    })
  }
  constructor(private httpClient: HttpClient) { }




  SendMaill(name: string, description: string, subject: string,date:Date, email: string,time:String,file:string): Observable<any> {
    return this.httpClient.post("http://localhost:8065/api/mail/sendmail", {
      name,
      description,
      subject,
      date ,
      email,
      time ,
      file:'C:/Users/Administrator/Desktop/1.pdf'
    
   
    }, this.httpOptions);
}
}
