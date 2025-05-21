import {
  Component,
  Inject,
  inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../../models/User';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterLink],
  template: `
    <p>profile works!</p>

    <!-- <div>
      <button class="btn btn-primary" routerLink="/profile/1">1</button>
      <button class="btn btn-primary" routerLink="/profile/2">2</button>
      <button class="btn btn-primary" routerLink="/profile/3">3</button>
    </div> -->

    <div *ngIf="user">
      <div class="container">
        <div class="card text-center">
          <div class="card-header">{{ user.name }} {{ user.id }}</div>
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">
              Company: {{ user.company.name }} "{{ user.company.catchPhrase }}
              "
            </p>
            <div class="card-header">User Details</div>

            <p>Email: {{ user.email }}</p>
            <p>City: {{ user.address.city }}</p>
            <p>Address: {{ user.address.street }}</p>
            <p>Zipcode: {{ user.address.zipcode }}</p>
            <p>Phone: {{ user.phone }}</p>
            <p>Username: {{ user.username }}</p>
            <p>Website: {{ user.website }}</p>

            <a
              class="btn btn-primary"
              routerLink="../{{
                this.id && this.id > 1 ? getPreviousUser(this.id) : this.id
              }}"
              routerLinkActive="active"
              >Previous User</a
            >
            <a
              class="btn btn-primary"
              routerLink="../{{
                this.id && this.id < 10 ? getNextUser(this.id) : this.id
              }}"
              routerLinkActive="active"
              >Next User</a
            >
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProfileComponent {
  user: User | undefined;
  id: number | undefined;
  error: any = null;

  activateRoute = inject(ActivatedRoute);
  http = inject(HttpClient);

  constructor() {
    this.activateRoute.params.subscribe((result) => {
      this.id = result['userId'];
      this.http
        .get<User>(`https://jsonplaceholder.typicode.com/users/${this.id}`)
        .subscribe((res) => (this.user = res));
    });
  }

  getNextUser(number: number) {
    return Number(number) + 1;
  }
  getPreviousUser(number: number) {
    return Number(number) - 1;
  }
}
