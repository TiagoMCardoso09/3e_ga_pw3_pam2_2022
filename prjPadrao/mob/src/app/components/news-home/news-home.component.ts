import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss'],
})
export class NewsHomeComponent implements OnInit {

  newshome = [
    {
      indice: 0,
      titulo: 'Eleito jogo do ano, Rainbow Six Siege é protagonista no Prêmio Esports Brasil 2021',
      subtitulo: 'Com títulos internacionais, game da Ubisoft é o destaque da premiação; Gustavo “Psycho”, capitão da Ninjas in Pyjamas, vence o prêmio de melhor atleta do ano',
      imagem: 'https://www.r6esportsbr.com/_next/image/?url=https%3A%2F%2Fr6.epanel.com.br%2Fuploads%2Fpost%2F108_photo_pt.jpg%3F1639751173&w=1920&q=75',
      saibamais: 'https://www.r6esportsbr.com/en/news/108/'
    },
    {
      indice: 1,
      titulo: 'Rainbow Six Brasil Awards 2021 coroa e celebra temporada histórica do país na modalidade',
      subtitulo: 'Com três troféus, Luccas “Paluh” é o destaque da cerimônia; confira os vencedores de todas as categorias',
      imagem: 'https://www.r6esportsbr.com/_next/image/?url=https%3A%2F%2Fr6.epanel.com.br%2Fuploads%2Fpost%2F107_photo_pt.jpg%3F1639070042&w=1920&q=75',
      saibamais: 'https://www.r6esportsbr.com/en/news/107/'
    },
    {
      indice: 2,
      titulo: 'Team Liquid e Ninjas in Pyjamas vencem e garantem vaga na Grande Final do Campeonato Brasileiro de Rainbow Six Siege 2021',
      subtitulo: 'Após duelo histórico no Six Invitational, equipes se reencontram em clima de revanche pela decisão de título nacional de Rainbow Six neste sábado (4); torneio tem premiação total de meio milhão de reais',
      imagem: 'https://www.r6esportsbr.com/_next/image/?url=https%3A%2F%2Fr6.epanel.com.br%2Fuploads%2Fpost%2F106_photo_pt.jpg%3F1638200873&w=1920&q=75',
      saibamais: 'https://www.r6esportsbr.com/en/news/106/'
    }
  ]

  constructor() { }

  ngOnInit() {}

}
