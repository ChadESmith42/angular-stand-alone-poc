import { IActionButton } from './iaction-button.interface'
import { IImage } from './iimage.inteface'

export interface ICard {
  id: number | string,
  title: string,
  subtitle?: string,
  image?: IImage,
  description: string[],
  actionButtons?: IActionButton[]
}
