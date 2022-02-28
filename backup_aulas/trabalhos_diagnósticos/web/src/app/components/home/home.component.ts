import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carousel = [
    {
      indice: 0,
      titulo: 'Guia completo do Six Invitational 2022: confira todas as informações sobre o principal torneio de Rainbow Six Siege do ano',
      subtitulo: 'Com seis equipes, Brasil tenta ampliar domínio na modalidade e defender título mundial; premiação total é de aproximadamente R$ 16 milhões',
      imagem: 'https://www.r6esportsbr.com/_next/image/?url=https%3A%2F%2Fr6.epanel.com.br%2Fuploads%2Fpost%2F112_photo_pt.jpg%3F1643832962&w=1920&q=75',
      saibamais: 'Com seis equipes, Brasil tenta ampliar domínio na modalidade e defender título mundial; premiação total é de aproximadamente R$ 16 milhões',
      class: 'active'
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
    }
  ]

  cards = [
    {
      imagem: 'https://www.r6esportsbr.com/_next/image/?url=%2Fassets%2Fchamps%2F2%2Fwhite%2Fpt%2Fvert.svg&w=128&q=75',
      camp: 'Invitational 2022',
      acompanhar: 'https://www.r6esportsbr.com/home/2/'
    },
    {
      imagem: 'https://www.r6esportsbr.com/_next/image/?url=%2Fassets%2Fchamps%2F18%2Fwhite%2Fen%2Fvert.svg&w=128&q=75',
      camp: 'Six Major Mexico',
      acompanhar: 'https://www.r6esportsbr.com/en/home/18/'
    },
    {
      imagem: 'https://www.r6esportsbr.com/_next/image/?url=%2Fassets%2Fchamps%2F8%2Fwhite%2Fen%2Fvert.svg&w=128&q=75',
      camp: 'Latin American Pro League',
      acompanhar: 'https://www.r6esportsbr.com/en/home/8/'
    },
    {
      imagem: 'https://www.r6esportsbr.com/_next/image/?url=%2Fassets%2Fchamps%2F20%2Fwhite%2Fen%2Fvert.svg&w=128&q=75',
      camp: 'North America League',
      acompanhar: 'https://www.r6esportsbr.com/en/home/20/'
    },
    {
      imagem: 'https://www.r6esportsbr.com/_next/image/?url=%2Fassets%2Fchamps%2F19%2Fwhite%2Fen%2Fvert.svg&w=128&q=75',
      camp: 'European League',
      acompanhar: 'https://www.r6esportsbr.com/en/home/19/'
    },
    {
      imagem:'https://www.r6esportsbr.com/_next/image/?url=%2Fassets%2Fchamps%2F1%2Fwhite%2Fen%2Fvert.svg&w=128&q=75',
      camp: 'Brazil Division',
      acompanhar: 'https://www.r6esportsbr.com/en/home/1/'
    },
    {
      imagem:'https://www.r6esportsbr.com/_next/image/?url=%2Fassets%2Fchamps%2F5%2Fwhite%2Fen%2Fvert.svg&w=128&q=75',
      camp: 'Mexico Division',
      acompanhar: 'https://www.r6esportsbr.com/en/home/5/'
    },
    {
      imagem:'https://www.r6esportsbr.com/_next/image/?url=%2Fassets%2Fchamps%2F17%2Fwhite%2Fen%2Fvert.svg&w=128&q=75',
      camp: 'https://www.r6esportsbr.com/_next/image/?url=%2Fassets%2Fchamps%2F17%2Fwhite%2Fen%2Fvert.svg&w=128&q=75',
      acompanhar: 'https://www.r6esportsbr.com/en/home/17/'
    },
    {
      imagem: 'https://www.r6esportsbr.com/_next/image/?url=%2Fassets%2Fchamps%2F11%2Fwhite%2Fen%2Fvert.svg&w=128&q=75',
      camp: 'Brazil Cup',
      acompanhar: 'https://www.r6esportsbr.com/en/home/11/'
    },
    {
      imagem:'https://www.r6esportsbr.com/_next/image/?url=%2Fassets%2Fchamps%2F15%2Fwhite%2Fen%2Fvert.svg&w=128&q=75',
      camp: 'Mexico Cup',
      acompanhar: 'https://www.r6esportsbr.com/en/home/15/'
    },
    {
      imagem:'https://www.r6esportsbr.com/_next/image/?url=%2Fassets%2Fchamps%2F3%2Fwhite%2Fen%2Fvert.svg&w=128&q=75',
      camp: 'Latim America South Cup',
      acompanhar: 'https://www.r6esportsbr.com/en/home/3/'
    },
    {
      imagem:'https://www.r6esportsbr.com/_next/image/?url=%2Fassets%2Fchamps%2F9%2Fwhite%2Fen%2Fvert.svg&w=128&q=75',
      camp: "Women's Circuit of Rainbow Six",
      acompanhar: 'https://www.r6esportsbr.com/en/home/9/'
    },
    {
      imagem:'https://www.r6esportsbr.com/_next/image/?url=%2Fassets%2Fchamps%2F4%2Fwhite%2Fen%2Fvert.svg&w=128&q=75',
      camp: 'Brazil Challenger League',
      acompanhar: 'https://www.r6esportsbr.com/en/home/4/'
    },
    {
      imagem:'https://www.r6esportsbr.com/_next/image/?url=%2Fassets%2Fchamps%2F6%2Fwhite%2Fen%2Fvert.svg&w=128&q=75',
      camp: 'Mexico Challenger',
      acompanhar: 'https://www.r6esportsbr.com/en/home/6/'
    },
    {
      imagem:'https://www.r6esportsbr.com/_next/image/?url=%2Fassets%2Fchamps%2F16%2Fwhite%2Fen%2Fvert.svg&w=128&q=75',
      camp: 'Latim America South Challenger',
      acompanhar: 'https://www.r6esportsbr.com/en/home/16/'
    }
  ]

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

  ngOnInit(): void {
  }

}
