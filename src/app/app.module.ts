import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactsCountComponent } from './contacts/contacts-count/contacts-count.component';
import { ContactsService } from './contacts/contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactsListComponent,
    ContactsCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
