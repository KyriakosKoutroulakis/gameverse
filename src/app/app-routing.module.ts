import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { enable } from 'colors';

// Components
import { Error404Component } from './components/error404/error404.component';
import { GameComponent } from './components/games/game/game.component';
import { GamesComponent } from './components/games/games.component';
import { GenresComponent } from './components/genres/genres.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'game/:id', component: GameComponent},
  { path: 'genres', component: GenresComponent },
  { path: 'news', component: NewsComponent },
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
