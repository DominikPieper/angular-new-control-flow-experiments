import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngruhr-defer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './defer.component.html'
})
export class DeferComponent {
  cond = true;
}
