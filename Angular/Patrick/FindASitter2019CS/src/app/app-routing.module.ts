import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DisplayQuizComponent } from './display-quiz/display-quiz.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { PortalComponent } from './portal/portal.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home/index', pathMatch: 'full' }, // if baseUrl => go to login
  {path: 'home', component: HomeComponent, children: [
    {path: 'index', component: IndexComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'login', component: LoginComponent, },
    {path: 'register', component: RegisterComponent },  
  ] },
  {path: 'portal', component: PortalComponent, canActivate: [AuthGuard], children: [
      {path: 'display-quiz', component: DisplayQuizComponent },  
  ]},


  {path: '**', component: PageNotFoundComponent } //wildcard - if no routes match, display this
 ];
 

//define available routes!
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
