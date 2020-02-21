import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PaginainicialComponent } from './paginainicial/paginainicial.component';


const routes: Routes = [

  {path:'dashboard',component:HomeComponent, children:[

    {path:'cadastro',component:CadastroComponent},
    {path:'index',component:PaginainicialComponent},
    {path:'',redirectTo:'/dashboard/index',pathMatch:'full'}
  ]},
  {path:'',redirectTo:'/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
