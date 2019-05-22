import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ReactiveFormsModule, FormsModule, NgControl } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule, MatCheckboxModule } from "@angular/material";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { DisplayQuizzesComponent } from "./display-quizzes/display-quizzes.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { PortalComponent } from "./portal/portal.component";
import { CreateQuizComponent } from "./create-quiz/create-quiz.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { QuizComponent } from "./quiz/quiz.component";
import { DisplayQuizComponent } from "./display-quiz/display-quiz.component";
import { AppState, rootReducer } from "./store";
import { DevToolsExtension, NgRedux, NgReduxModule } from "@angular-redux/store";
import { NgReduxRouter, NgReduxRouterModule } from "@angular-redux/router";
import { HttpClientModule } from '@angular/common/http';
import { QuizPipe } from './quiz.pipe';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DisplayQuizzesComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    HomeComponent,
    PortalComponent,
    CreateQuizComponent,
    QuizComponent,
    DisplayQuizComponent,
    QuizPipe,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatCheckboxModule,
    NgReduxModule,
    HttpClientModule,
    FormsModule,
    NgReduxRouterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<AppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter
  ) {
    this.ngRedux.configureStore(rootReducer, {}, [],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);
    ngReduxRouter.initialize(/* args */);
  }
}
