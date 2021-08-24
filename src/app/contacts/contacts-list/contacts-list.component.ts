import { Component, Input, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/models/contact-model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: {}[] = this.contactsService.contacts;

  @Input() contactsCount: number = this.contacts.length;

  constructor(private contactsService: ContactsService) { }

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
