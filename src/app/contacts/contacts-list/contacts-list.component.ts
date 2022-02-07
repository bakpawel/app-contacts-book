import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContactModel } from 'src/app/models/contact-model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent implements OnInit, OnDestroy {
  contacts: {}[] = this.contactsService.contacts;
  subscription: Subscription;

  @Input() contactsCount: number;

  constructor(
    private contactsService: ContactsService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.contactsService.contactChanged.subscribe(
      (contacts: ContactModel[]) => {
        this.contacts = contacts;
      }
    );
    this.loadContacts();
    this.contactsCount = this.contacts.length;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  hideContacts() {
    this.contacts = [];
    this.contactsCount = this.contacts.length;
  }

  showContacts() {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contacts = this.contactsService.getContacts();
    this.contactsCount = this.contacts.length;
  }
  onSaveContacts() {
    this.dataStorageService.storeContacts();
  }

  onFetchContacts() {
    this.dataStorageService.fetchContacts().subscribe(() => {
      this.loadContacts();
    });
  }
  goToContactDetails(index, e: Event) {
    e.stopPropagation();
    this.router.navigate(['contact-details', index], {
      relativeTo: this.route,
    });
  }

  removeContact(index, e: Event) {
    e.stopPropagation();
    this.contactsService.deleteContact(index);
    this.contactsCount = this.contacts.length;
    this.router.navigate(['/contacts']);
  }
}
