import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngruhr-ngswitch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngswitch.component.html'
})
export class NgswitchComponent {
  person = { name: "Einstein", firstName: "Albert" };
}
