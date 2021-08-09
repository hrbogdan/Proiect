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
      this.eventsService.events = allEvents;
      // for (let index = 0; index < this.eventsService.events.length; index++) {
      //   let object = this.eventsService.events[index];
      //   let id = object.id;
      //   let image = object.image;
      //   console.log(id);
      //   console.log(image);
      // }
    });
  }
}
