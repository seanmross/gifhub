import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterializeModule } from 'angular2-materialize';
import { Angular2TokenService } from 'angular2-token';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './components/authentication/authentication.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
// import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
// import { LoginFormComponent } from './components/login-form/login-form.component';
// import { RegisterFormComponent } from './components/register-form/register-form.component';
import { NavbarComponent } from './components/navigation/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';

import { RandomService } from './services/random.service';
import { SearchService } from './services/search.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { TrendingService } from './services/trending.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FavoritesComponent,
    // AuthDialogComponent,
    // LoginFormComponent,
    // RegisterFormComponent,
    NavbarComponent
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    MaterializeModule,
    AuthenticationModule
  ],
  providers: [
    RandomService,
    SearchService,
    Angular2TokenService,
    AuthService,
    AuthGuard,
    TrendingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
