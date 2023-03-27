import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './home/side-nav/side-nav.component';
import { MainContentComponent } from './home/main-content/main-content.component';
import { DashboardComponent } from './home/main-content/dashboard/dashboard.component';
import { AssignedMeComponent } from './home/main-content/assigned-me/assigned-me.component';
import { TaskCreatorComponent } from './home/main-content/task-creator/task-creator.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PendingTaskComponent } from './home/main-content/pending-task/pending-task.component';




@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TopNavBarComponent,
    HomeComponent,
    LoginComponent,
    SideNavComponent,
    MainContentComponent,
    DashboardComponent,
    AssignedMeComponent,
    TaskCreatorComponent,
    PendingTaskComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent],
  exports:[ ]
})
export class AppModule { }
