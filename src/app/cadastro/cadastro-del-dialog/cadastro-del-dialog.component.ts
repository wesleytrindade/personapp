import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Snackbar } from 'src/app/snackbar.component';

@Component({
  selector: 'app-cadastro-del-dialog',
  templateUrl: './cadastro-del-dialog.component.html',
  styleUrls: ['./cadastro-del-dialog.component.css']
})
export class CadastroDelDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dados: any,private dialog:MatDialogRef<CadastroDelDialogComponent>, private snackBar:Snackbar) {}


  ngOnInit() {
  }

  deletarRegistro()
  {
    let ls = JSON.parse(localStorage.getItem("personList"));

    console.log(this.dados.dados);

    ls.forEach(e => {

      if(this.dados.dados.id == e.id)
      {
        ls.splice(e,1);
      }
    });

  localStorage.setItem("personList",JSON.stringify(ls));
  this.fecharDialog();
  }

  fecharDialog()
  {
    this.dialog.close();
  }


}
