import { Component } from '@angular/core';
import { AppComponentConfiguration } from './configuration/app.configuration';
import { IFooterConfiguration } from './models/configuration/IFooterConfiguration.interface';
import { IHeaderConfiguration } from './models/configuration/IHeaderConfiguration.interface';

@Component({
  selector: 'cbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  footer: IFooterConfiguration = {
    title: AppComponentConfiguration.footer.title,
    links: AppComponentConfiguration.footer.links,
    copyrightStartDate: AppComponentConfiguration.footer.copyrightStartDate
  };
  header: IHeaderConfiguration = {
    title: AppComponentConfiguration.header.title,
    brandIcon: AppComponentConfiguration.header.brandIcon,
    links: AppComponentConfiguration.header.links,
    externalLinks: AppComponentConfiguration.header.externalLinks,
    loginButton: AppComponentConfiguration.header.loginButton,
    profileButton: AppComponentConfiguration.header.profileButton
  };

}
