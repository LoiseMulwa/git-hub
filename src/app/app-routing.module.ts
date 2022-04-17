import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ReposComponent } from './repos/repos.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'repos', component:ReposComponent},
  { path: 'nav-bar', component:NavBarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
