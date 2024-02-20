export interface DemonSlayer {
  name: string;
  img: string;
  description: string;
}

export interface RickAndMortyAPIResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: RickAndMortyCharacter[];
}

export interface RickAndMortyCharacter {
  id: number;
  name: string;
  species: string;
  status: string;
  gender: string;
  image: string;
}
