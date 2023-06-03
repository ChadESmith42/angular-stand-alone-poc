import { Component } from '@angular/core';
import { AppComponentConfiguration } from './configuration/app.configuration';
import { Link } from './models/link.model';

@Component({
  selector: 'cbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = AppComponentConfiguration.title;
  links: Link[] = AppComponentConfiguration.links;
  copyrightStartDate = AppComponentConfiguration.copyrightStartDate
}
