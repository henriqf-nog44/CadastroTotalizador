import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = null;
  pessoas = [];

  salvar(){
    this.pessoas.push({
      nome: this.nome
    });
    this.nome = null;
  }

  remover(pessoa){
    const i = this.pessoas.indexOf(pessoa);
    this.pessoas.splice(i, 1);
  }
}
