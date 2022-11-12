import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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