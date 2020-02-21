import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { CadastroComponent } from './cadastro.component';
import { CadastroAddDialogComponent } from './cadastro-add-dialog/cadastro-add-dialog.component';
import { CadastroDelDialogComponent } from './cadastro-del-dialog/cadastro-del-dialog.component';
import { MatFormFieldModule, MatButtonModule, MatCardModule, MatTableModule, MatIconModule, MatDialogModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroService } from './service/cadastro.service';

@NgModule({
  declarations: [
    CadastroComponent,
    CadastroAddDialogComponent,
    CadastroDelDialogComponent
  ],
  imports: [

    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule


  ],
  providers: [CadastroService],
  entryComponents:[CadastroAddDialogComponent,CadastroDelDialogComponent]
})

export class CadastroModule {}
