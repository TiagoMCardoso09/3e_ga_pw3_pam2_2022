import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  indice = 0;

  carousel = [
    {
      indice: 0,
      titulo: 'Guia completo do Six Invitational 2022: confira todas as informações sobre o principal torneio de Rainbow Six Siege do ano',
      subtitulo: 'Com seis equipes, Brasil tenta ampliar domínio na modalidade e defender título mundial; premiação total é de aproximadamente R$ 16 milhões',
      imagem: 'https://www.r6esportsbr.com/_next/image/?url=https%3A%2F%2Fr6.epanel.com.br%2Fuploads%2Fpost%2F112_photo_pt.jpg%3F1643832962&w=1920&q=75',
      saibamais: 'Com seis equipes, Brasil tenta ampliar domínio na modalidade e defender título mundial; premiação total é de aproximadamente R$ 16 milhões'
    },
    {
      indice: 1,
      titulo: 'Qualificatório latino-americano decide último representante da região no Six Invitational 2022 na Suécia',
      subtitulo: 'Seis equipes da região latino-americana embarcam para Estocolmo em busca de última vaga em campeonato mundial de Rainbow Six Siege neste fim de semana, MIBR e Black Dragons representam o Brasil',
      imagem: 'https://www.r6esportsbr.com/_next/image/?url=https%3A%2F%2Fr6.epanel.com.br%2Fuploads%2Fpost%2F111_photo_pt.webp%3F1643399034&w=1920&q=75',
      saibamais: 'https://www.r6esportsbr.com/en/news/111/'
    },
    {
      indice: 2,
      titulo: 'MIBR e Black Dragons representam o Brasil na disputa por última vaga para o Six Invitational 2022',
      subtitulo: 'Equipes disputarão o qualificatório fechado latino-americano contra adversárias mexicanas e argentinas',
      imagem: 'https://www.r6esportsbr.com/_next/image/?url=https%3A%2F%2Fr6.epanel.com.br%2Fuploads%2Fpost%2F109_photo_pt.jpg%3F1640012234&w=1920&q=75',
      saibamais: 'https://www.r6esportsbr.com/en/news/109/'
    },
    {
      indice: 3,
      titulo: 'Eleito jogo do ano, Rainbow Six Siege é protagonista no Prêmio Esports Brasil 2021',
      subtitulo: 'Com títulos internacionais, game da Ubisoft é o destaque da premiação; Gustavo “Psycho”, capitão da Ninjas in Pyjamas, vence o prêmio de melhor atleta do ano',
      imagem: 'https://www.r6esportsbr.com/_next/image/?url=https%3A%2F%2Fr6.epanel.com.br%2Fuploads%2Fpost%2F108_photo_pt.jpg%3F1639751173&w=1920&q=75',
      saibamais: 'https://www.r6esportsbr.com/en/news/108/'
    },
    {
      indice: 4,
      titulo: 'Rainbow Six Brasil Awards 2021 coroa e celebra temporada histórica do país na modalidade',
      subtitulo: 'Com três troféus, Luccas “Paluh” é o destaque da cerimônia; confira os vencedores de todas as categorias',
      imagem: 'https://www.r6esportsbr.com/_next/image/?url=https%3A%2F%2Fr6.epanel.com.br%2Fuploads%2Fpost%2F107_photo_pt.jpg%3F1639070042&w=1920&q=75',
      saibamais: 'https://www.r6esportsbr.com/en/news/107/'
    },
    {
      indice: 5,
      titulo: 'Team Liquid e Ninjas in Pyjamas vencem e garantem vaga na Grande Final do Campeonato Brasileiro de Rainbow Six Siege 2021',
      subtitulo: 'Após duelo histórico no Six Invitational, equipes se reencontram em clima de revanche pela decisão de título nacional de Rainbow Six neste sábado (4); torneio tem premiação total de meio milhão de reais',
      imagem: 'https://www.r6esportsbr.com/_next/image/?url=https%3A%2F%2Fr6.epanel.com.br%2Fuploads%2Fpost%2F106_photo_pt.jpg%3F1638200873&w=1920&q=75',
      saibamais: 'https://www.r6esportsbr.com/en/news/106/'
    },
    {
      indice: 1000,
      titulo: '',
      subtitulo: '',
      imagem: '',
      saibamais: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
