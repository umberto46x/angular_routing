import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/User';
import { HttpClient } from '@angular/common/http';
import { CardComponent } from '../../shared/card.component';

@Component({
  imports: [CommonModule, CardComponent],
  template: `
    <div class="mt-3" *ngFor="let user of users">
      <app-card [user]="user">
        <input type="text" />
      </app-card>
    </div>
  `,
  styles: ``,
})
export class ContactsComponent implements OnInit {
  users: User[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => {
        console.log(res);
        this.users = res;
      });
  }
}
