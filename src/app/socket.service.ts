import { Injectable } from '@angular/core';
import { Sms } from './Sms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var SockJS: any;
declare var Stomp: any;
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  public stompClient: any;
  public sms:Sms[] = [];
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json',
      
    })
  }
  constructor() { 
     
    this.initializeWebSocketConnection();
  }



  initializeWebSocketConnection() {
    /**
     * Create a SockJS server with created back-end endpoint called /chat-websocket and added it over Stomp.
     */
    const serverUrl = 'http://localhost:8065/gs-guide-websocket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
     const that = this;
    /**
     * Connect stomp client and subscribe asynchronously to the chat message-handling Controller endpoint and push any message body into the messages array
     */
    this.stompClient.connect({}, function(_frame: any) {
      that.stompClient.subscribe('/topic/sms',
        (       _sms: any) => {
        if (_sms.body) {
          let obj = JSON.parse(_sms.body);
  
     that.addMessage(obj.to, obj.message);
   
        }
      });
    });
  }
  addMessage(to: string, message: string) {
    this.sms.push( {
        to: to,
        message: message,
       
    }
     );
  }
  sendMessage(msg: Sms) {
    this.stompClient.send('/app/sms/'+msg.to, {}, JSON.stringify(msg));
 }
}
