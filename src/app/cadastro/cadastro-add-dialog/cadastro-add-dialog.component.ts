import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-cadastro-add-dialog',
  templateUrl: './cadastro-add-dialog.component.html',
  styleUrls: ['./cadastro-add-dialog.component.css']
})
export class CadastroAddDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private dados, private dialogRef:MatDialogRef<CadastroAddDialogComponent>){ }

  formCadastroUsuario = new FormGroup({
    nome_usuario: new FormControl('',[Validators.required]),
    email_usuario: new FormControl('',[Validators.required,Validators.email]),
    telefone_usuario: new FormControl('',[Validators.required])
  });

  ngOnInit() {
  }

  enviarForm()
  {

  }

  fecharDialog()
  {
    this.dialogRef.close();
  }

}
