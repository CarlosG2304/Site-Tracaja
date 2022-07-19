import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class MailService {

  envioUrl: string = 'http://localhost:3100/enviar';

  constructor(private httpClient: HttpClient) { }

  enviar(subject: string, email: string, text: string): Observable<any> {
    return this.httpClient.post<any>(`${this.envioUrl}`, { subject, email, text });
  }

}
