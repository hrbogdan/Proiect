import { Component, OnInit } from '@angular/core';
import { EventService, Event } from '../service/event/event.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public eventsService: EventService) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe((allEvents: Event[]) => {
      console.log(allEvents);
      this.eventsService.events = allEvents;
    });
  }

  public deleteEvent(event: Event) {
    this.eventsService
      .deleteEvent(event)
      .subscribe(
        () =>
          (this.eventsService.events = this.eventsService.events.filter(
            (e: Event) => e.id !== event.id
          ))
      );
  }
}
