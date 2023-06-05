import { Component } from '@angular/core';
import { ICard } from 'src/app/common/models/icard.interface';

@Component({
  selector: 'cbc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cards: ICard[] = [
    {
      id: 0,
      title: 'Honestatis',
      subtitle: 'Ius ipsum delicatissimi ex.',
      description: [
        'Omnis maiorum appetere ad eos, cum no possit inimicus scriptorem. Te wisi liber referrentur nec. Ad probo oratio animal sea, ius dico eleifend ea, at invenire scriptorem sit. Ut eius vivendo honestatis vis, ad pri liber aliquando, in ius fabulas dissentiet.'
      ],
      actionButtons: [
        {
          id: 'launch-projects',
          label: 'Honestatis',
          routerLink: {
            url: '/projects',
            target: '_self'
          }
        }
      ]
    },
    {
      id: 2,
      title: 'Laboramus',
      subtitle: 'Solet quando eos ad.',
      description: ['Rebum democritum vim in, sit in ullum inani dissentiet. An usu solum mollis deseruisse, id mazim tempor inimicus his, ad tation consequat rationibus nam. Unum efficiendi ea per. Ad mel solum error legere. Sit et soleat albucius senserit, falli interesset qui in.', 'Pro ne soluta constituam, ut wisi adolescens repudiandae cum. Singulis dissentiet cum eu. Id graecis habemus laboramus has, vim no invenire voluptatum. In est sale aeque, malis tollit qui ea. Homero detraxit mediocrem per ei, aliquid dolorum id vix. At intellegat cotidieque cum, illud audire nonumes ex usu.'],
      actionButtons: [
        {
          id: 'launch-resume',
          label: 'Laboramus',
          routerLink: {
            url: '/resume',
            target: '_self'
          }
        }
      ]
    },
    {
      id: 3,
      title: 'Facilis',
      subtitle: 'Ex dictas consulatu sententiae vel.',
      description: ['Duo ex officiis invenire moderatius, usu no petentium liberavisse. Et viderer definitionem cum, ex ferri dolor omnesque sed. Pri expetenda posidonium assueverit id, sea cu enim mutat illud. Nam probo facilis at, cu malis latine nusquam pro. Duo at lorem dicat, an vel doming liberavisse. Sed minim omnes postea at. Eu has aliquip disputationi vituperatoribus.'],
      actionButtons: [
        {
          id: 'launch-links',
          label: 'Facilis',
          routerLink: {
            url: '/links',
            target: '_self'
          }
        }
      ]
    }
  ];
}
