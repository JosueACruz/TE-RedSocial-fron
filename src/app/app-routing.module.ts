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
  { path: 'profile', loadChildren: () => import('./profile/profile/profile.module').then(m => m.ProfileModule) }, 
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, 
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
  { path: 'editProfile', loadChildren: () => import('./profile/edit-profile/edit-profile.module').then(m => m.EditProfileModule) },
  { path: 'explore', loadChildren: () => import('./profile/explore/explore.module').then(m => m.ExploreModule) },
  { path: 'followers', loadChildren: () => import('./profile/followers/followers.module').then(m => m.FollowersModule) },
  { path: 'following', loadChildren: () => import('./profile/following/following.module').then(m => m.FollowingModule) },
  { path: 'profileuser', loadChildren: () => import('./profile/profileuser/profileuser.module').then(m => m.ProfileuserModule) },
  { path: 'publicacion', loadChildren: () => import('./publicacion/publicacion.module').then(m => m.PublicacionModule) },
  { path: 'addpublicacion', loadChildren: () => import('./addpublicacion/addpublicacion.module').then(m => m.AddpublicacionModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
