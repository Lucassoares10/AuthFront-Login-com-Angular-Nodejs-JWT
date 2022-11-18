import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    //carregando com loadChildren para fazer o laze loading da aplicação.
    loadChildren: () => import('./core/components/auth/auth.module').then(m =>{
      return m.AuthModule
    })
  },
  {
    path: 'admin',
    canActivateChild: [AuthGuard], //Interceptador
    loadChildren: () => import ('./components/admin/admin.module').then(m =>{
     return m.AdminModule
    })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }