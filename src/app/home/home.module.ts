import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home.component';
import { NgModule } from "@angular/core";
import {MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatToolbarModule, MatExpansionModule} from "@angular/material";
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({

  declarations: [
    HomeComponent,
    MenuComponent
  ],
  imports: [

    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
})

export class HomeModule { }
