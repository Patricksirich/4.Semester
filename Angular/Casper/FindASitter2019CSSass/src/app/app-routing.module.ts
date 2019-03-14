import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DisplayQuizComponent } from './display-quiz/display-quiz.component';
import { MortenComponent } from './morten/morten.component';
import { JosefComponent } from './josef/josef.component';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './admin/admin.guard';
import {AdminComponent} from './admin/admin.component';
import { from } from 'rxjs';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'logout', redirectTo: 'home/login', pathMatch: 'full' },

  {
    path: 'home', component: HomeComponent, children: [
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  {
    path: 'portal', component: PortalComponent, canActivate:[AuthGuard], children: [
      
      { path: 'display-quiz', component: DisplayQuizComponent },
      { path: 'create-quiz', component: CreateQuizComponent, canActivate:[AdminGuard] },
      //{path: 'admin', component: AdminComponent}
    ]
  },

  { path: '**', component: PageNotFoundComponent } //If no routes matched, show this
];

// Define routes


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
