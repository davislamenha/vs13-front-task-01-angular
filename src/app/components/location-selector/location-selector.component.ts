import { Component, EventEmitter, Output } from '@angular/core';
import { LocationResponse, RickAndMortyLocation } from '../../types/interfaces';
import { RickAndMortyAPI } from '../../services/rick-and-morty.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-selector.component.html',
  styleUrl: './location-selector.component.scss',
})
export class LocationSelectorComponent {
  @Output() locationId = new EventEmitter<string>();

  data: LocationResponse = {
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
    results: [],
  };

  locations: RickAndMortyLocation[] = [];

  constructor(private rickAndMortyAPI: RickAndMortyAPI) {}

  async ngOnInit() {
    try {
      this.data = await this.rickAndMortyAPI.getAllLocations();
      this.locations = this.data.results;
      console.log(this.locations);
    } catch (error) {
      throw error;
    }
  }

  sendLocation(event: any) {
    const id = event.target.value;
    this.locationId.emit(id);
  }
}
