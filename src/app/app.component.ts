import { Component } from '@angular/core';
import { Platform } from 'ionic-angular/index';

@Component({
  template: `
    <ion-card>

      <ion-card-header>
        Ionic2TS Quick Start
      </ion-card-header>
    
      <ion-card-content>
        <!-- Add card content here! -->
      </ion-card-content>
    
    </ion-card>
  `
})
export class AppComponent {
  constructor(private platform: Platform) { }
}
