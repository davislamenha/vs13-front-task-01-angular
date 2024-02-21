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

  private formatPageUrl = (pageUrl: string) => {
    const formatedPageUrl = pageUrl.split('https://rickandmortyapi.com/api')[1];
    return formatedPageUrl;
  };

  async getAllCharacters(pageUrl?: string) {
    try {
      const pathname = pageUrl ? this.formatPageUrl(pageUrl) : '/character';
      const response = await this.api.get(pathname);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getSingleCharacter(id: string) {
    try {
      const response = await this.api.get(`/character/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getAllLocations(pageUrl?: string) {
    try {
      const pathname = pageUrl ? this.formatPageUrl(pageUrl) : '/location';
      const response = await this.api.get(pathname);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getSingleLocation(id: string) {
    try {
      const response = await this.api.get(`/location/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getAllEpisodes(pageUrl?: string) {
    try {
      const pathname = pageUrl ? this.formatPageUrl(pageUrl) : '/episode';
      const response = await this.api.get(pathname);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getSingleEpisode(id: string) {
    try {
      const response = await this.api.get(`/episode/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
