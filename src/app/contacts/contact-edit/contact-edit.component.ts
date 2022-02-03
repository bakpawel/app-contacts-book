import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
})
export class ContactEditComponent implements OnInit {
  id: number;
  editForm: FormGroup;

  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadContact();
    this.initForm();
  }

  loadContact() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(this.id);
    });
  }
  private initForm() {
    let contactName = '';
    let contactSurname = '';
    let contactNumber = '';
    let contactEmail = '';

    const contact = this.contactsService.getContact(this.id);
    contactName = contact.name;
    contactSurname = contact.surname;
    contactNumber = contact.phone;
    contactEmail = contact.email;
    console.log(contactName, contactSurname, contactNumber);
    this.editForm = new FormGroup({
      name: new FormControl(contactName, Validators.required),
      surname: new FormControl(contactSurname, Validators.required),
      phone: new FormControl(contactNumber, Validators.pattern('[0-9]{0,15}')),
      email: new FormControl(contactEmail, Validators.email),
    });
  }

  onSubmit() {
    this.contactsService.updateContact(this.id, this.editForm.value);
    this.onBack();
  }

  onBack() {
    this.router.navigate(['/contacts']);
  }
}
