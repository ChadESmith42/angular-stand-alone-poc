import { SafeResourceUrl } from '@angular/platform-browser';

export interface IImage {
  id: number | string,
  url: SafeResourceUrl,
  altText: string
}
