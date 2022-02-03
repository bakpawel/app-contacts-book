import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsCountComponent } from './contacts-count/contacts-count.component';
import { SharedModule } from '../shared/shared.module';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactDetailsStartComponent } from './contact-details-start/contact-details-start.component';
import { RouterModule } from '@angular/router';
import { ContactEditComponent } from './contact-edit/contact-edit.component';



@NgModule({
  declarations: [
    ContactsListComponent, 
    ContactsCountComponent, 
    ContactAddComponent, 
    ContactDetailsComponent, 
    ContactDetailsStartComponent, ContactEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactsListComponent
  ]
})
export class ContactsModule { }
