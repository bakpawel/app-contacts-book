import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  contacts: {}[] = [{id: 4,firstName: 'Nea',surname: 'Different', phoneNumber: 334},{id: 4,firstName: 'Someeee',surname: 'surname', phoneNumber: 3453453},{id: 4,firstName: 'firstName',surname: 'surname', phoneNumber: 3453453}];


}
