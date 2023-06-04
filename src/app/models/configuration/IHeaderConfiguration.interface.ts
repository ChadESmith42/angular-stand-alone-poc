import { Link } from '../link.model';
import { IRouterLink } from '../routerLink.model';

export interface IHeaderConfiguration {
  title: string,
  brandIcon?: IRouterLink,
  externalLinks?: Link[]
  links?: IRouterLink[],
  loginButton?: IRouterLink,
  profileButton?: IRouterLink
}
