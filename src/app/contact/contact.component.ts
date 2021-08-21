import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  Contact,
  ContactService,
} from '../service/contact-service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(public contactsService: ContactService) {}

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe((allContacts: Contact[]) => {
      this.contactsService.contacts = allContacts;
    });
  }
  public addContacts(form: NgForm) {
    this.contactsService
      .addContacts(form.value)
      .subscribe((newContact: Contact) => {
        this.contactsService.contacts.push(newContact);
      });
    if (form.submitted) {
      let messageSent = document.getElementById('messageSent');
      messageSent!.style.display = 'block';
    }
    console.log(form.submitted);
    form.resetForm();
  }
}
