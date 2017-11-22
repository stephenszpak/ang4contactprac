import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/Observable/of';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.css']
})
export class ContactSearchComponent implements OnInit {

  contactsObserve: Observable<Contact[]>;
  private searchTerms = new Subject<string>();

  constructor(private contactService: ContactService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.contactsObserve = this.searchTerms.pipe(
      debounceTime(250),
      distinctUntilChanged(),
      switchMap((term: string) => this.contactService.searchContacts(term))
    )
  }

}
