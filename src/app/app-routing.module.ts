import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
////////////////aqui van tooodas las paginas (se importan  import {} from'ejemplo/ejemplo.component';  lo mas probable es que se importen solas)
import {LoginComponent} from'./pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';




const routes: Routes = [
  {
    path:'',
    redirectTo:'/inicio',
    pathMatch:'full'
  },
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
