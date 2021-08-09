import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event, EventService } from 'src/app/service/event/event.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  constructor(public eventsService: EventService) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe((allEvents: Event[]) => {
      this.eventsService.events = allEvents;
    });
  }

  public addEvent(form: NgForm) {
    this.eventsService.addEvent(form.value).subscribe((newEvent: Event) => {
      this.eventsService.events.push(newEvent);
    });
  }
}
