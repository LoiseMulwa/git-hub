import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReposComponent } from './repos/repos.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './profile.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavBarComponent,
    ReposComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }











// @NgModule({
//   declarations: [
//     AppComponent,
  
//     NavbarComponent,
//     GitFormComponent,
//     ProfileComponent,
//     UserComponent,
//     RepositoryComponent
//   ],
  // imports: [
  //   BrowserModule,
  //   AppRoutingModule,
  //   FormsModule,
  //   HttpClientModule
  // ],
//   providers: [ProfileService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
