import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { MatSnackBarModule, MatCheckboxModule } from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import { DisplayQuizComponent } from './display-quiz/display-quiz.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { PortalComponent } from './portal/portal.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { DisplayQuizzesComponent } from './display-quizzes/display-quizzes.component';
import { MatSelectModule } from '@angular/material/select';
import { QuizComponent } from './quiz/quiz.component';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';  
import { rootReducer, AppState } from './store';
import { NgRedux, NgReduxModule } from '@angular-redux/store';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DisplayQuizComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    HomeComponent,
    IndexComponent,
    PortalComponent,
    AdminComponent,
    AdminPanelComponent,
    CreateQuizComponent,
    DisplayQuizzesComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule, 
    MatMenuModule, 
    MatSnackBarModule, 
    MatDividerModule, 
    MatCheckboxModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<AppState>,
    // private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter,) {
   
    this.ngRedux.configureStore(
      rootReducer, {});
 
      ngReduxRouter.initialize(/* args */);   
  }
 }
