import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyAPI {
  private api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
  });

  constructor() {}

  async getAllCharacters() {
    try {
      const response = await this.api.get('/character');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
