import { Component, Input, input } from '@angular/core';
import { User } from '../models/User';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-card',
  template: `
    <div class="card" style="width: 18rem;">
      <div class="card-header" (click)="visible = !visible">
        {{ user?.name }}
      </div>
      <div class="card-body" *ngIf="visible">
        <p class="card-text">
          {{ user?.email }}
        </p>
        <div>
          <ng-content></ng-content>
        </div>

        <a routerLink="../profile/{{ user?.id }}" routerLinkActive="active">
          <button class="btn btn-primary">Go to Profile</button></a
        >

        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  `,
  styles: ``,
})
export class CardComponent {
  @Input() user: User | undefined;
  visible = false;
  constructor() {
    console.log('app card constructor');
  }
}
