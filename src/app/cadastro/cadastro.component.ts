import { Snackbar } from './../snackbar.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  dadosLocalStorage: any;
  dados:any;
  dataSource:any;
  displayedColumns: String[] = ['nome', 'email', 'telefone','acao'];
  naoHaDados:boolean;

  constructor(private cadastroDialog:MatDialog, private matSnackBar: Snackbar) { }

  ngOnInit() {

      this.carregaDados();
  }

  carregaDados()
  {
    this.dadosLocalStorage = JSON.parse(localStorage.getItem("personList"));

    if(this.dadosLocalStorage != undefined)
    {
      this.naoHaDados = false;
      this.dados = this.dadosLocalStorage;
      this.dataSource = new MatTableDataSource<any>(this.dados);
    }

    else
    {
      this.naoHaDados = true;
    }
  }

  editarUsuario()
  {

  }

  deletarUsuario()
  {

  }

  cadastrarUsuario()
  {

  }

}
