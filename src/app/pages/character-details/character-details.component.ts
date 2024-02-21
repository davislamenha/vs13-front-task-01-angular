import { Component, OnInit } from '@angular/core';
import { RickAndMortyCharacter } from '../../types/interfaces';
import { RickAndMortyAPI } from '../../services/rick-and-morty.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss',
})
export class CharacterDetailsComponent implements OnInit {
  character: Partial<RickAndMortyCharacter> = {};

  constructor(
    private rickAndMortyAPI: RickAndMortyAPI,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    try {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.character = await this.rickAndMortyAPI.getSingleCharacter(id);
      }
    } catch (error) {
      throw error;
    }
  }
}
