import { Component, Input, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/models/contact-model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: {}[] = [{id: 4,firstName: 'Someone',surname: 'Different', phoneNumber: 334},{id: 4,firstName: 'firstName',surname: 'surname', phoneNumber: 3453453},{id: 4,firstName: 'firstName',surname: 'surname', phoneNumber: 3453453}];

  @Input() contactsCount: number = this.contacts.length;

  constructor() { }

  ngOnInit():void {
    this.loadContacts();
  }

  hideContacts() {
    this.contacts = [];
    this.contactsCount = this.contacts.length;
  }

  showContacts() {
    this.loadContacts();
  }

  loadContacts(): void {
  }

  goToContactDetails(contact){
    console.log('idziemy do szczegółów kontaktu o id= ' + (+contact+1))
  }

  removeContact(contact){
    console.log("usuwamy kontakt")
  }
}
