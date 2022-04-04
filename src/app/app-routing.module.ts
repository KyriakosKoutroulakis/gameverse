import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GamesComponent } from './components/games/games.component';
import { GameComponent } from './components/games/game/game.component';
import { GenresComponent } from './components/genres/genres.component';
import { NewsComponent } from './components/news/news.component';
import { AboutComponent } from './components/about/about.component';
<<<<<<< HEAD
import { E500Component } from './components/errors/e500/e500.component';
import { E404Component } from './components/errors/e404/e404.component';
=======
import { Error404Component } from './components/error404/error404.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';

>>>>>>> ca4c60e2224bb952f620083f8a04fceff7b7c044

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
<<<<<<< HEAD
=======
  { path: 'payment', component: PaymentPageComponent },
>>>>>>> ca4c60e2224bb952f620083f8a04fceff7b7c044
  { path: 'games', component: GamesComponent },
  { path: 'game/:id', component: GameComponent},
  { path: 'genres', component: GenresComponent },
  { path: 'news', component: NewsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'maintenance', component: E500Component },
  { path: '**', component: E404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
