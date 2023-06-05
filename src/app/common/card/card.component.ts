import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { ICard } from '../models/icard.interface';

@Component({
  selector: 'cbc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule, NgFor, NgIf, RouterLink, MatCardModule
  ]
})
export class CardComponent {
  @Input() card: ICard = {
    id: 0,
    title: '',
    description: [],
    actionButtons: []
  }
}
