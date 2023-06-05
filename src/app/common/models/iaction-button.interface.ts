import { SafeResourceUrl } from '@angular/platform-browser'

export interface IActionButton {
  id: number | string,
  label: string,
  icon?: {
    url: SafeResourceUrl,
    altText: string
  },
  routerLink: {
    url: string,
    target: string
  }
}
