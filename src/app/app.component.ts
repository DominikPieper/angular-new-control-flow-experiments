import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgforComponent } from './ngfor/ngfor.component';
import { AtforComponent } from './atfor/atfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { AtifComponent } from './atif/atif.component';
import { AtswitchComponent } from './atswitch/atswitch.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { DeferComponent } from './defer/defer.component';

@Component({
  selector: 'ngruhr-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NgforComponent,
    AtforComponent,
    NgifComponent,
    AtifComponent,
    NgswitchComponent,
    AtswitchComponent,
    DeferComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
