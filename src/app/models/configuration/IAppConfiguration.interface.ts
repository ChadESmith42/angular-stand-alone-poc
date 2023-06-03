import { Link } from '../link.model';

export interface IAppComponentConfiguration {
  links: Link[],
  title: string,
  copyrightStartDate: number
}
