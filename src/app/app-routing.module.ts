import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Aqui esta llamando los modulos
const routes: Routes = [
  //creo una ruta
  //Con esto lo que hago es que al entrar al localhost:2400 de neustro server
  //nos redireccione automaticamente al modulo o componente home
  {
    path:"",
    redirectTo:"/login",
    pathMatch:"full",
  },

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, 
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
