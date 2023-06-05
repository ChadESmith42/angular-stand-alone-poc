import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { Link } from 'src/app/models/link.model';
import { IRouterLink } from 'src/app/models/routerLink.model';

@Component({
  selector: 'cbc-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterLink, MatListModule, NgFor, NgIf ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() brandIcon?: IRouterLink;
  @Input() externalLinks?: Link[];
  @Input() links?: IRouterLink[];
  @Input() loginButton?: IRouterLink;
  @Input() profileButton?: IRouterLink;
  isUserAuthenticated: boolean = false;

  public authorizeUser(): void {
    this.isUserAuthenticated = !this.isUserAuthenticated;
  }
}
