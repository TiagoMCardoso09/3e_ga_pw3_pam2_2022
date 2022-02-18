import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApicadastroService {

  constructor(
    private http: HttpClient
  ) { }

  salvarCadastro(cadastro: any): Observable<any>{
    return this.http.post<any>("http://localhost:3000/cadastro", cadastro).pipe(
      map(retorno => retorno),
      catchError(erro => throwError(erro))
    )
  }
}
