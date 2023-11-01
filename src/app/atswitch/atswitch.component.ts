import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngruhr-atswitch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atswitch.component.html'
})
export class AtswitchComponent {
  person = { name: "Einstein", firstName: "Albert" };
}
