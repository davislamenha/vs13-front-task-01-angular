import { Routes } from '@angular/router';

import { CharactersComponent } from './pages/characters/characters.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { LocationComponent } from './pages/location/location.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'locais', component: LocationComponent },
  { path: 'episodios', component: EpisodesComponent },
  { path: 'personagens', component: CharactersComponent },
  { path: 'personagens/:id', component: CharacterDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];
