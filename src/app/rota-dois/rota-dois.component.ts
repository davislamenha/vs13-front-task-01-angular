import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TwoWayDataBindingComponent } from '../two-way-data-binding/two-way-data-binding.component';

@Component({
  selector: 'app-rota-dois',
  standalone: true,
  imports: [CommonModule, TwoWayDataBindingComponent],
  templateUrl: './rota-dois.component.html',
  styleUrl: './rota-dois.component.scss',
})
export class RotaDoisComponent {
  name = 'Anônimo';
}
