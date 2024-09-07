import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { ContactComponent } from './component/contact/contact.component';
import { PageNotFoundComponentComponent } from './common/page-not-found-component/page-not-found-component.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  // {path:'',redirectTo :'/login',pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:PageNotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
