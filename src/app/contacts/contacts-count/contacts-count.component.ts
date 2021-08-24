import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-count',
  templateUrl: './contacts-count.component.html',
  styleUrls: ['./contacts-count.component.css']
})
export class ContactsCountComponent implements OnInit {

  @Input()numberOfContacts: number;
  constructor() { }

  ngOnInit(): void {
  }

}
