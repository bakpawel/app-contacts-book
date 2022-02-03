import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ContactModel } from '../models/contact-model';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contactChanged = new Subject();

  constructor(private http: HttpClient) {}

  contacts: ContactModel[] = [];

  getContact(index: number): any {
    return this.contacts[index];
  }
  getContacts() {
    return this.contacts.slice();
  }

  setContacts(contacts: ContactModel[]) {
    this.contacts = contacts;
    this.contactChanged.next(this.contacts.slice());
  }
  addContact(contact) {
    this.contacts.push(contact);
    this.contactChanged.next(this.contacts.slice());
  }

  updateContact(index, updatedContact) {
    this.contacts[index] = updatedContact;
    this.contactChanged.next(this.contacts.slice());
  }

  deleteContact(index: number) {
    console.log('to jest index' + index);
    this.contacts.splice(index, 1);
    this.contactChanged.next(this.contacts.slice());
  }
}
