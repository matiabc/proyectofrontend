import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogoComponent} from '../app/catalogo/catalogo.component'
import { HomeComponent } from '../app/home/home.component'
const routes: Routes = [
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
