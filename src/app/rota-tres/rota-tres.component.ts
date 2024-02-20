import { Component, OnInit } from '@angular/core';
import { RickAndMortyAPI } from '../services/rick-and-morty.service';
import {
  RickAndMortyAPIResponse,
  RickAndMortyCharacter,
} from '../types/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rota-tres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rota-tres.component.html',
  styleUrl: './rota-tres.component.scss',
})
export class RotaTresComponent implements OnInit {
  data: RickAndMortyAPIResponse = {
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

  async ngOnInit() {
    try {
      this.data = await this.rickAndMortyAPI.getAllCharacters();
      this.characters = this.data.results;
    } catch (error) {
      throw error;
    }
  }
}
