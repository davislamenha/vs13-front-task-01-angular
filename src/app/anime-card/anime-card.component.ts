import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DemonSlayer } from '../types/interfaces';

@Component({
  selector: 'app-anime-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anime-card.component.html',
  styleUrl: './anime-card.component.scss',
})
export class AnimeCardComponent {
  @Input() demonSlayer: DemonSlayer;

  constructor() {
    this.demonSlayer = {
      name: '',
      img: '',
      description: '',
    };
  }
}
