import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Snackbar } from 'src/app/snackbar.component';
import { isNull } from 'util';

@Component({
  selector: 'app-cadastro-add-dialog',
  templateUrl: './cadastro-add-dialog.component.html',
  styleUrls: ['./cadastro-add-dialog.component.css']
})
export class CadastroAddDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private dados, private dialogRef: MatDialogRef<CadastroAddDialogComponent>, private snackBar: Snackbar) { }

  /*FORMULARIO E VALIDAÇÃO*/

  formCadastroUsuario = new FormGroup({
    nome_usuario: new FormControl('', [Validators.required]),
    email_usuario: new FormControl('', [Validators.required, Validators.email]),
    telefone_usuario: new FormControl('', [Validators.required])
  });

  isEdit: boolean;

  ngOnInit() {

    if (!isNull(this.dados)) {
      this.formCadastroUsuario.controls['nome_usuario'].setValue(this.dados.dados.nome);
      this.formCadastroUsuario.controls['email_usuario'].setValue(this.dados.dados.email);
      this.formCadastroUsuario.controls['telefone_usuario'].setValue(this.dados.dados.telefone);
    }

  }

  //MÉTODO QUE SALVA OS DADOS NO LOCALSTORAGE
  enviarForm() {

    if (this.formCadastroUsuario.valid) {
      if (this.isEdit) {

        let lx = JSON.parse(localStorage.getItem("personList"));
        let aux = 0;
        lx.forEach(e => {

          console.log(e);

          if ((e.id == this.dados.dados.id)) {

            lx[aux] = {
              id:this.dados.dados.id,
              nome: this.formCadastroUsuario.controls['nome_usuario'].value,
              email: this.formCadastroUsuario.controls["email_usuario"].value,
              telefone: this.formCadastroUsuario.controls["telefone_usuario"].value
            };
          }
          aux++;

        });

        let co = {

          message: "Editado com sucesso",
          actionButtonLabel: "Fechar"
        }

        localStorage.setItem("personList", JSON.stringify(lx));
        this.snackBar.GenericAlert(co);
        this.dialogRef.close();

      }

      else {

        let jsonarr;
        let lc = JSON.parse(localStorage.getItem("personList"));
        if (lc == null) { lc = [] }
        if (lc.length == 0) {
          jsonarr = [{

            id: 0,
            nome: this.formCadastroUsuario.controls['nome_usuario'].value,
            email: this.formCadastroUsuario.controls["email_usuario"].value,
            telefone: this.formCadastroUsuario.controls["telefone_usuario"].value,
          }];
        }

        else {

          jsonarr = lc;
          jsonarr[lc.length] = {
            id:lc.lenght,
            nome: this.formCadastroUsuario.controls['nome_usuario'].value,
            email: this.formCadastroUsuario.controls["email_usuario"].value,
            telefone: this.formCadastroUsuario.controls["telefone_usuario"].value,
          }
        }

        localStorage.setItem("personList", JSON.stringify(jsonarr));

        let co = {

          message: "Salvo com sucesso",
          actionButtonLabel: "Fechar"
        }
        this.snackBar.GenericAlert(co);
        this.dialogRef.close();
      }
    }
  }

  //FECHAR A JANELA
  fecharDialog() {
    this.dialogRef.close();
  }

  //SETAR O TÍTULO DA JANELA
  setTitulo() {
    if (this.dados == undefined) {
      this.isEdit = false;
      return "Cadastro de Contatos"
    }

    else {
      this.isEdit = true;
      return "Edição de Contatos"
    }
  }

}
