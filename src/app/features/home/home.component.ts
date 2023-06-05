import { Component } from '@angular/core';
import { ICard } from 'src/app/common/models/icard.interface';

@Component({
  selector: 'cbc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cards: ICard[] = [
    {
      id: 0,
      title: 'Projects',
      subtitle: 'A few personal projects to showcase my abilities.',
      description: [
        'These are personal projects that I created and maintain to display my creative abilities.'
      ],
      actionButtons: [
        {
          id: 'launch-projects',
          label: 'View Project Details',
          routerLink: {
            url: '/projects',
            target: '_self'
          }
        }
      ]
    },
    {
      id: 2,
      title: 'Resume',
      subtitle: 'An overview of my professional experience.',
      description: ['My work experience demonstrates just some of my skills and abilities. I\'ve included the associated technologies for each position to help illustrate my technical experience.', 'My resume was last updated as of June 2023.'],
      actionButtons: [
        {
          id: 'launch-resume',
          label: 'View Resume',
          routerLink: {
            url: '/resume',
            target: '_self'
          }
        }
      ]
    },
    {
      id: 3,
      title: 'Links',
      subtitle: 'A few external sites of interest.',
      description: ['These are some external sites that will provide additional insight into my experience.'],
      actionButtons: [
        {
          id: 'launch-links',
          label: 'View Links',
          routerLink: {
            url: '/links',
            target: '_self'
          }
        }
      ]
    }
  ]
}
