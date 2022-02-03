import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  id:number;
  contactDetails;

  constructor(private contactsService: ContactsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loadContact();
  }

  loadContact(){
    this.route.params.subscribe(
      (params: Params )=>{
        this.id = +params ['id'];
        this.contactDetails = this.contactsService.getContact(this.id);
      }
     )
  }
}
