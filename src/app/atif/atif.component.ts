import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngruhr-atif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atif.component.html'
})
export class AtifComponent {
  person = { name: "Einstein", firstName: "Albert" };
}
