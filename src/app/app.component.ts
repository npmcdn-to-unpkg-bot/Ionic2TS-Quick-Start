import { Component } from '@angular/core';
import { Platform } from 'ionic-angular/index';

@Component({
  template: `
    <ion-card>
      <ion-card-header>
        Ionic2TS Quick Start
      </ion-card-header>
      <ion-card-content>
        <button>Default</button>
        <button outline>Primary Outline</button>
        <button clear>Primary Clear</button>
        <button round>Primary Round</button>
      </ion-card-content>
    </ion-card>
  `
})
export class AppComponent {
  constructor(private platform: Platform) { }
}
