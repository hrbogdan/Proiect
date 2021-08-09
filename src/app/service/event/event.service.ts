import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  public events: Event[] = [];
  public event!: Event;

  constructor(private http: HttpClient) {}

  public getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:3000/events');
  }

  public getEvent(id: number): Observable<Event> {
    return this.http.get<Event>(`http://localhost:3000/events/${id}`);
  }

  public addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>('http://localhost:3000/events', event);
  }

  public deleteEvent(event: Event): Observable<Event> {
    return this.http.delete<Event>(`http://localhost:3000/events/${event.id}`);
  }

  public editEvent(event: Event): Observable<Event> {
    return this.http.put<Event>(
      `http://localhost:3000/events/${event.id}`,
      event
    );
  }
}

export interface Event {
  id: number;
  title: string;
  description: string;
  trainer: string;
  image?: string;
  date: string;
  like?: number;
}
