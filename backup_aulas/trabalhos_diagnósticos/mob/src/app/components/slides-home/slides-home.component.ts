import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides-home',
  templateUrl: './slides-home.component.html',
  styleUrls: ['./slides-home.component.scss'],
})
export class SlidesHomeComponent implements OnInit {

  slides = [
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

  constructor() { }

  ngOnInit() {}

}
