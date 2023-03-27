import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// const token = localStorage.getItem('token')
// console.log(token);

const routes: Routes = [
  {
    path: 'signup',
    component:AuthComponent
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'',
    component:HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
