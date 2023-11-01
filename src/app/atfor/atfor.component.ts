import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngruhr-atfor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atfor.component.html'
})
export class AtforComponent {
  historicalPeople: { name: string; firstName: string }[] = [
    { name: "Einstein", firstName: "Albert" },
    { name: "Curie", firstName: "Marie" },
    { name: "Shakespeare", firstName: "William" },
    { name: "Da Vinci", firstName: "Leonardo" },
    { name: "Austen", firstName: "Jane" },
    { name: "Gandhi", firstName: "Mahatma" },
    { name: "Nightengale", firstName: "Florence" },
    { name: "Tesla", firstName: "Nikola" },
    { name: "Franklin", firstName: "Benjamin" },
    { name: "Tubman", firstName: "Harriet" }
  ];

  emptyArray = []
}
