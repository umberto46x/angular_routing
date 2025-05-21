import { Routes } from '@angular/router';
import { ContactsComponent } from './features/contacts/contacts.component';
import { ProfileComponent } from './features/profile/profile.component';
import { SettingsComponent } from './features/settings/settings.component';
import { FilenotfoundComponent } from './core/filenotfound.component';

export const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/:userId', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent, data: { theme: 'Dark' } },
  { path: '404', component: FilenotfoundComponent },
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];
