export interface DemonSlayer {
  name: string;
  img: string;
  description: string;
}

interface APIPagesInfo {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
}

export interface CharacterResponse extends APIPagesInfo {
  results: RickAndMortyCharacter[];
}

export interface LocationResponse extends APIPagesInfo {
  results: RickAndMortyLocation[];
}

export interface EpisodeResponse extends APIPagesInfo {
  results: RickAndMortyEpisode[];
}

export interface RickAndMortyCharacter {
  id: number;
  name: string;
  species: string;
  status: string;
  gender: string;
  image: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  episode: string[];
}

export interface RickAndMortyLocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

export interface RickAndMortyEpisode {
  id: number;
  name: string;
  episode: string;
  air_date: string;
  characters: string[];
}
