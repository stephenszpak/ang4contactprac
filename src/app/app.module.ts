import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

// import {AngularFireModule} from 'angularfire2';
// import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { DashComponent } from './dash/dash.component';
import { ContactService }          from './contact.service';
import { MessageService }       from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactSearchComponent,
    ContactDetailComponent,
    DashComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule, // for database
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ContactService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
