import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css'],
})
export class ContactAddComponent implements OnInit {
  newContactForm: FormGroup;

  constructor(
    private router: Router,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    this.newContactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.pattern('[0-9]{0,9}')),
      email: new FormControl(null, Validators.email),
    });
  }

  onSubmit() {
    this.contactsService.addContact(this.newContactForm.value);
    this.onBack();
  }

  onBack() {
    this.router.navigate(['/contacts']);
  }

  onReset() {
    this.newContactForm.reset();
  }
}
