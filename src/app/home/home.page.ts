import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Pessoa } from '../models/pessoa.model';
import { PessoasService } from '../pessoas.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private pessoa : Pessoa
  public pessoaForm : FormGroup
  public arrayPessoa: any

  constructor(
    private formBuilder : FormBuilder,
    private pessoaService : PessoasService
  ) {}
ngOnInit(){
  this.pessoa = {id: Guid.createEmpty(), nome :""}

  this.pessoaForm = this.formBuilder.group

  ({
    id : [this.pessoa.id],
    nome : [this.pessoa.nome]
  })
}

enviar (){
  if (this.pessoaForm.valid){
    this.pessoaService.inserir(this.pessoaForm.value)
  }
}
}
