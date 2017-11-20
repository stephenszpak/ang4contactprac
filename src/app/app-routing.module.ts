import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashComponent }   from './dash/dash.component';
import { ContactsComponent }      from './contacts/contacts.component';
import { ContactDetailComponent }  from './contact-detail/contact-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashComponent },
  { path: 'detail/:id', component: ContactDetailComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
