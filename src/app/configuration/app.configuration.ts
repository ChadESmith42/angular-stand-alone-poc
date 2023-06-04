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
  },
  header: {
    title: 'Coding By Chad',
    brandIcon: {
      link: '/',
      label: '',
      iconSrc: '',
      iconAltText: 'Home Button'
    },
    links: [
      {
        link: '/projects',
        label: 'Projects',
        style: 'header-link'
      },
      {
        link: '/resume',
        label: 'Resume',
        style: 'header-link'
      },
      {
        link: '/links',
        label: 'Links',
        style: 'header-link'
      }
    ],
    externalLinks: [
      {
        url: 'https://github.com/chadesmith42',
        target: '_blank',
        label: 'Github',
        styleClass: 'header-link'
      },
      {
        url: 'https://linkedin.com/in/chadesmith',
        target: '_blank',
        label: 'LinkedIn',
        styleClass: 'header-link'
      },
      {
        url: 'https://twitter.com/mapgeek_chad',
        target: '_blank',
        label: 'Twitter',
        styleClass: 'header-link'
      }
    ],
    loginButton: {
      link: '/login',
      label: 'Login',
      style: 'header-button'
    },
    profileButton: {
      link: '/profile',
      label: 'Profile',
      style: 'header-button'
    }
  }
}
