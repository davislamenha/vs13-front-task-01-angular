import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimeCardComponent } from '../anime-card/anime-card.component';

@Component({
  selector: 'app-rota-um',
  standalone: true,
  imports: [CommonModule, AnimeCardComponent],
  templateUrl: './rota-um.component.html',
  styleUrl: './rota-um.component.scss',
})
export class RotaUmComponent {
  animes = [
    {
      name: 'Demon Slayer',
      img: '../../assets/demon_slayer_logo.png',
      description:
        'Demon Slayer ou Kimetsu no Yaiba em japonês é uma série de mangá escrita e ilustrada por Koyoharu Gotouge. Ela foi serializada na revista semanal Weekly Shonen Jump da Shueisha de fevereiro de 2016 a maio de 2020, com seus capítulos sendo compilados em 23 volumes tankobon até o momento.',
    },
    {
      name: 'Demon Slayer',
      img: '../../assets/demon_slayer_logo.png',
      description:
        'Demon Slayer ou Kimetsu no Yaiba em japonês é uma série de mangá escrita e ilustrada por Koyoharu Gotouge. Ela foi serializada na revista semanal Weekly Shonen Jump da Shueisha de fevereiro de 2016 a maio de 2020, com seus capítulos sendo compilados em 23 volumes tankobon até o momento.',
    },
  ];
}
