import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngruhr-ngif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngif.component.html'
})
export class NgifComponent {
  person = { name: "Einstein", firstName: "Albert" };
}
