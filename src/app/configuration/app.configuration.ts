import { IAppComponentConfiguration } from '../models/configuration/IAppConfiguration.interface'

export const AppComponentConfiguration: IAppComponentConfiguration = {
  footer: {
    title: 'Coding By Chad',
    links: [
      {
        url: 'https://linkedin.com/in/chadesmith',
        target: '_blank',
        label: 'LinkedIn',
        styleClass: '',
        icon: '/assets/icons/linkedin_icon.svg',
        iconAltText: '[LinkedIn logo]'
      },
      {
        url: 'https://github.com/ChadESmith42',
        target: '_blank',
        label: 'GitHub',
        styleClass: '',
        icon: '/assets/icons/github_icon.svg',
        iconAltText: '[GitHub logo]'
      },
      {
        url: 'https://twitter.com/MapGeek_Chad',
        target: '_blank',
        label: 'Twitter',
        styleClass: '',
        icon: '/assets/icons/twitter_icon.svg',
        iconAltText: '[Twitter logo]'
      }
    ],
    copyrightStartDate: 2018
  }
}
