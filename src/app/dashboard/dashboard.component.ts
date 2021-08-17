import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Contact,
  ContactService,
} from '../service/contact-service/contact.service';
import { EventService, Event } from '../service/event/event.service';
import { Member, TeamService } from '../service/team/team.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  title: any;
  p: number = 1;
  q: number = 1;
  r: number = 1;

  constructor(
    public eventsService: EventService,
    public teamService: TeamService,
    public contactService: ContactService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe((allEvents: Event[]) => {
      this.eventsService.events = allEvents;
    });

    this.teamService.getMember().subscribe((allTeam: Member[]) => {
      this.teamService.member = allTeam;
    });

    this.contactService.getContacts().subscribe((allContacts: Contact[]) => {
      this.contactService.contacts = allContacts;
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

  public deleteMember(member: Member) {
    this.teamService
      .deleteMember(member)
      .subscribe(
        () =>
          (this.teamService.member = this.teamService.member.filter(
            (f: Member) => f.id !== member.id
          ))
      );
  }

  Search() {
    if (this.title == '') {
      this.ngOnInit();
    } else {
      this.eventsService.events = this.eventsService.events.filter((ts) => {
        return ts.title
          .toLocaleLowerCase()
          .match(this.title.toLocaleLowerCase());
      });
    }
  }

  key: string = 'id';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
