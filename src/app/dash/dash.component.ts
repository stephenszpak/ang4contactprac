import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  
  contacts: Contact[];
  
    constructor(private contactService: ContactService) { }
  
    ngOnInit() {
      this.getContacts();
    }
  
    getContacts(): void {
      this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts.slice(1, 5));
    }
}
