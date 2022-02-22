import { Component, OnInit } from '@angular/core';
import { ApicadastroService } from 'src/app/services/apicadastro/apicadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  username = ''
  email = ''
  senha = ''
  dataNascimento = ""


  constructor(
    private cServ: ApicadastroService
  ) { }

  ngOnInit(): void {

  }

  salvarCadastro(){
    let c = {
      username: this.username,
      email: this.email,
      senha: this.senha,
      dataNacimento: this.dataNascimento
    }

    this.cServ.salvarCadastro(c).subscribe(
      (dados) => {
        console.log(dados);
      },
      (erro) =>{
        console.error(erro);
      }
    )
  }
}
