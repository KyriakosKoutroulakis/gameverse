import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RawgService } from 'src/app/services/rawg.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit {
  public data: any;
  public msg: string = '';
  public searchTerm: string = '';
  public routeState: any;
  public loading: boolean = true;

  constructor(private rawgService: RawgService, private router: Router) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.routeState = this.router.getCurrentNavigation()?.extras.state;

      if (this.routeState) {
        this.getGamesFromSpecificGenre(this.routeState.genreSelected);
      }
    }
   }

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.rawgService.getUrlRequested('games', '').subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
      },
      error: (err) => this.msg = err
    });
  }

  getNextPage(url: string) {
    this.loading = true;

    this.rawgService.getNextPage(url).subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
      },
      error: (err) => this.msg = err
    });

    // Scroll back on top of the page
    window.scroll(0, 0);
  }

  // Order games on page based on parameter clicked
  orderingGames(param: string) {
    this.loading = true;

    this.rawgService.getUrlRequested('games', param).subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
      },
      error: (err) => this.msg = err
    });
  }

  // Filter games with search param
  filterGames() {
    this.loading = true;
    this.data = {};

    this.rawgService.getUrlRequested(`games?search=${this.searchTerm}`, '').subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
      },
      error: (err) => this.msg = err
    });

    this.searchTerm = '';
  }

  // Edits game genres to be displayed
  getGameGenres(genres: Array<any>): Array<string> {
    const gameGenres: Array<string> = [];

    genres.forEach(genres => gameGenres.push(` ${genres.slug}`));

    return gameGenres.length > 2 ? gameGenres.slice(0,2) : gameGenres;
  }

  // Function activated from Genres component
  // Display games based on genre selection
  getGamesFromSpecificGenre(genreSelected: string) {
    this.loading = true;
    this.data = {};

    this.rawgService.getUrlRequested(`games?genres=${genreSelected}`, '').subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
      },
      error: (err) => this.msg = err
    });
  }
}

