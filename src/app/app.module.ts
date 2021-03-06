import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Bootstrap icons
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { link45Deg, xbox, pcDisplay, playstation, facebook, instagram, twitter, twitch, chevronLeft, boxArrowLeft, microsoft } from 'ngx-bootstrap-icons';

// Services
import { RawgService } from './services/rawg.service';
import { UserService } from './services/user.service';
import { NewsService } from './services/news.service';
 
// Components
import { AppComponent } from './app.component';
import { GamesComponent } from './components/games/games.component';
import { GameComponent } from './components/games/game/game.component';
import { GenresComponent } from './components/genres/genres.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { E404Component } from './components/errors/e404/e404.component';
import { E500Component } from './components/errors/e500/e500.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';

const icons = { link45Deg, xbox, pcDisplay, playstation, facebook, instagram, twitter, twitch, chevronLeft, boxArrowLeft, microsoft }

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameComponent,
    GenresComponent,
    AboutComponent,
    NewsComponent,
    NavbarComponent,
    FooterComponent,
    SpinnerComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    E404Component,
    E500Component,
    PaymentPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(icons),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    RawgService,
    UserService,
    NewsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
