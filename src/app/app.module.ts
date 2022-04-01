import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Bootstrap icons
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { link45Deg, xbox, pcDisplay, playstation } from 'ngx-bootstrap-icons';

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
import { Error404Component } from './components/error404/error404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

const icons = { link45Deg, xbox, pcDisplay, playstation  }

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameComponent,
    GenresComponent,
    AboutComponent,
    NewsComponent,
    Error404Component,
    NavbarComponent,
    FooterComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [
    RawgService,
    UserService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
