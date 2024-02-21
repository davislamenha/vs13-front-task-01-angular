import { Component } from '@angular/core';
import { LocationResponse, RickAndMortyLocation } from '../../types/interfaces';
import { RickAndMortyAPI } from '../../services/rick-and-morty.service';
import { LocationSelectorComponent } from '../../components/location-selector/location-selector.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [LocationSelectorComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  data: LocationResponse = {
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
    results: [],
  };

  location: Partial<RickAndMortyLocation> = {};

  constructor(private rickAndMortyAPI: RickAndMortyAPI) {}

  async handleLocation(id: string) {
    try {
      this.location = await this.rickAndMortyAPI.getSingleLocation(id);
      console.log(this.location);
    } catch (error) {
      throw error;
    }
  }
}
