import { Component, OnInit } from '@angular/core';

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
  public loading: boolean = true;

  constructor(private rawgService: RawgService) { }

  ngOnInit(): void {
    this.getGames();
  }

  async getGames() {
    this.rawgService.getUrlRequested('games', '').subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
      },
      error: (err) => this.msg = err
    });
  }

  async getNextPage(url: string) {
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

  getGameGenres(genres: Array<any>): Array<string> {
    const gameGenres: Array<string> = [];

    genres.forEach(genres => gameGenres.push(` ${genres.slug}`));

    return gameGenres.length > 2 ? gameGenres.slice(0,2) : gameGenres;
  }
}

