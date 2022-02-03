import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ContactsService } from '../contacts/contacts.service';
import { ContactModel } from '../models/contact-model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private contactsService: ContactsService
  ) {}

  storeContacts() {
    const contacts = this.contactsService.getContacts();

    this.http
      .put(
        'https://contact-book-6d19e-default-rtdb.europe-west1.firebasedatabase.app/contacts.json',
        contacts
      )
      .subscribe();
  }

  fetchContacts() {
    return this.http
      .get<ContactModel[]>(
        'https://contact-book-6d19e-default-rtdb.europe-west1.firebasedatabase.app/contacts.json'
      )
      .pipe(
        tap((contacts) => {
          this.contactsService.setContacts(contacts);
        })
      );
  }
}
