import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss'],
})
export class CommandsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  orders = [
    {
      id: 1,
      orderNumber: 'Cmd 1',
      orderDate: '22/09/2021',
      name: 'Laure Quinn',
      error: 'Adresse manquante',
      status: '🔴',
    },
    {
      id: 2,
      orderNumber: 'Cmd 2',
      orderDate: '22/09/2021',
      name: 'Bruno Daigle',
      error: 'Téléphone manquant',
      status: '🔴',
    },
    {
      id: 3,
      orderNumber: 'Cmd 3',
      orderDate: '22/09/2021',
      name: 'Karel Crête',
      error: 'Nom manquant',
      status: '🔴',
    },
    {
      id: 4,
      orderNumber: 'Cmd 4',
      orderDate: '22/09/2021',
      name: 'Auguste Bernard',
      error: 'Adresse manquante',
      status: '🔴',
    },
    {
      id: 5,
      orderNumber: 'Cmd 5',
      orderDate: '22/09/2021',
      name: 'Élisabeth Bazinet',
      error: 'Code postal érroné',
      status: '🔴',
    },
    {
      id: 6,
      orderNumber: 'Cmd 6',
      orderDate: '22/09/2021',
      name: 'Genevre Dufour',
      error: 'Rupture de stock',
      status: '🔴',
    },
    {
      id: 7,
      orderNumber: 'Cmd 7',
      orderDate: '22/09/2021',
      name: 'Saber Belisle',
      error: 'Ville manquante',
      status: '🔴',
    },
    {
      id: 8,
      orderNumber: 'Cmd 8',
      orderDate: '22/09/2021',
      name: 'Karlotta Lafrenière',
      error: 'Nom manquant',
      status: '🔴',
    },
  ];
}
