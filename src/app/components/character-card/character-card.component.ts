import { Component, Input } from '@angular/core';
import { RickAndMortyCharacter } from '../../types/interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  @Input() character: Partial<RickAndMortyCharacter> = {};
}
