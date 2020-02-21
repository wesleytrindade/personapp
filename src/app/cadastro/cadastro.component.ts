import { Snackbar } from './../snackbar.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CadastroAddDialogComponent } from './cadastro-add-dialog/cadastro-add-dialog.component';
import { CadastroDelDialogComponent } from './cadastro-del-dialog/cadastro-del-dialog.component';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  dadosLocalStorage: any;
  dados: any;
  dataSource: any;
  displayedColumns: string[] = ['nome', 'email', 'telefone', 'acao'];
  naoHaDados: boolean;

  constructor(private dialog: MatDialog, private matSnackBar: Snackbar) { }

  ngOnInit() {

    this.carregaDados();
  }

  carregaDados() {
    this.dadosLocalStorage = JSON.parse(localStorage.getItem("personList"));

    if (this.dadosLocalStorage != undefined) {
      if (this.dadosLocalStorage.length == 0) {
        this.naoHaDados = true;
      }
      else {

        this.naoHaDados = false;
        this.dados = this.dadosLocalStorage;
        this.dataSource = new MatTableDataSource<any>(this.dados);
      }
    }

    else {
      this.naoHaDados = true;
    }
  }

  editarUsuario(row) {
    const dialogref = this.dialog.open(CadastroAddDialogComponent, {
      width: '500px',
      data: {
        dados: row
      }
    });

    dialogref.afterClosed().subscribe(() => {

      this.carregaDados();
    });
  }

  deletarUsuario(row) {
    const dialogref = this.dialog.open(CadastroDelDialogComponent, {
      width: '250px',
      data: {
        dados: row
      }
    });

    dialogref.afterClosed().subscribe(() => {

      this.carregaDados();
    });
  }

  cadastrarUsuario() {
    const dialogref = this.dialog.open(CadastroAddDialogComponent, {
      width: '500px'
    });

    dialogref.afterClosed().subscribe(() => {

      this.carregaDados();
    });
  }



}


