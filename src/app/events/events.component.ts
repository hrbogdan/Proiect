import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { EventService, Event } from '../service/event/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  constructor(public eventsService: EventService) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe((allEvents: Event[]) => {
      console.log(allEvents);
      this.eventsService.events = allEvents;
    });
  }
}
