import { Component } from '@angular/core';
import { EpisodeResponse, RickAndMortyEpisode } from '../../types/interfaces';
import { RickAndMortyAPI } from '../../services/rick-and-morty.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss',
})
export class EpisodesComponent {
  data: EpisodeResponse = {
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
    results: [],
  };

  episodes: RickAndMortyEpisode[] = [];

  constructor(private rickAndMortyAPI: RickAndMortyAPI) {}

  async handleChangePage(pageUrl: string) {
    try {
      this.data = await this.rickAndMortyAPI.getAllEpisodes(pageUrl);
      this.episodes = this.data.results;
    } catch (error) {
      throw error;
    }
  }

  async ngOnInit() {
    try {
      this.data = await this.rickAndMortyAPI.getAllEpisodes();
      this.episodes = this.data.results;
    } catch (error) {
      throw error;
    }
  }
}
