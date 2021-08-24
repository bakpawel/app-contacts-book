import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsCountComponent } from './contacts-count/contacts-count.component';



@NgModule({
  declarations: [ContactsListComponent, ContactsCountComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ContactsListComponent
  ]
})
export class ContactsModule { }
