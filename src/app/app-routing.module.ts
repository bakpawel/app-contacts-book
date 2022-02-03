import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAddComponent } from './contacts/contact-add/contact-add.component';
import { ContactDetailsStartComponent } from './contacts/contact-details-start/contact-details-start.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/contacts' },
  {
    path: 'contacts',
    component: ContactsListComponent,
    children: [
      { path: '', component: ContactDetailsStartComponent },
      { path: 'contact-details/:id', component: ContactDetailsComponent },
    ],
  },
  { path: 'contact-edit/:id', component: ContactEditComponent },
  { path: 'contact-add', component: ContactAddComponent },
  { path: '**', redirectTo: 'contacts' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
