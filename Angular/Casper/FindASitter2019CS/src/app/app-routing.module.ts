import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { DisplayQuizComponent } from './display-quiz/display-quiz.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },

  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'display-quiz', component: DisplayQuizComponent },

  { path: '**', component: PageNotFoundComponent} // if no routes matched, display this
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
