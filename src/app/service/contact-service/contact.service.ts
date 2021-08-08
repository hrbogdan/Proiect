import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  public contacts: Contact[] = [];

  constructor(private http: HttpClient) {}

  public getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('http://localhost:3000/contact');
  }

  public addContacts(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>('http://localhost:3000/contact', contact);
  }
}

export interface Contact {
  id: number;
  firstName: string;
  secondName: string;
  message: string;
}
