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
  isFirstNameValid = false;
  isSecondNameValid = false;
  isMessageValid = false;

  onSubmit(contactForm: NgForm) {
    console.log(contactForm);
    if (!contactForm.valid) {
      this.isFirstNameValid = true;
    }
  }

  checkInputs() {
    const firstName: any = document.getElementById('firstName');
    const secondName: any = document.getElementById('secondName');
    const email: any = document.getElementById('email');
    const message: any = document.getElementById('message');
    if (firstName.value && secondName.value && email.value && message.value) {
      return false;
    }
    return true;
  }

  constructor(public contactsService: ContactService) {}

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe((allContacts: Contact[]) => {
      console.log(allContacts);
      this.contactsService.contacts = allContacts;
    });
  }
  public addContacts(form: NgForm) {
    // return alert(form.value.firstName);
    console.log(form);
    console.log(this.contactsService.contacts);
    this.contactsService
      .addContacts(form.value)
      .subscribe((newContact: Contact) => {
        this.contactsService.contacts.push(newContact);
      });
  }
}
