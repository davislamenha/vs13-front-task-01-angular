import { Component, OnInit } from '@angular/core';
import {
  CharacterResponse,
  RickAndMortyCharacter,
} from '../../types/interfaces';
import { RickAndMortyAPI } from '../../services/rick-and-morty.service';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent implements OnInit {
  data: CharacterResponse = {
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
    results: [],
  };

  characters: RickAndMortyCharacter[] = [];

  constructor(private rickAndMortyAPI: RickAndMortyAPI) {}

  async handleChangePage(pageUrl: string) {
    try {
      this.data = await this.rickAndMortyAPI.getAllCharacters(pageUrl);
      this.characters = this.data.results;
    } catch (error) {
      throw error;
    }
  }

  async ngOnInit() {
    try {
      this.data = await this.rickAndMortyAPI.getAllCharacters();
      this.characters = this.data.results;
    } catch (error) {
      throw error;
    }
  }
}
