import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: []
})
export class HomeComponent implements OnInit {

  cards = [{
    header: "Venda",
    text: "Intermediação e venda de imóveis rurais Reflorestamento, Silvicultura dentre outros",
    rota: '/agro'
  },
  {
    header: "Mercado",
    text: "Mercado nacional e internacional  em madeira e subprodutos  - serrada, decks, dentre outros;",
    rota: '/produtos'
  },
  {
    header: "Locação",
    text: "Locação de tratores de esteiras, escavadeiras hidráulicas, retroescavadeiras, etc.",
    rota: '/'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
