import { Link } from '../link.model';

export interface IFooterConfiguration {
  title: string,
  links?: Link[],
  copyrightStartDate?: number
}
