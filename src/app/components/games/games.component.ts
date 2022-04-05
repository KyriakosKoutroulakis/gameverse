import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

import { RawgService } from 'src/app/services/rawg.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective | undefined;

  public data: any;
  public msg: string = '';
  public searchTerm: string = '';
  public routeState: any;
  public loading: boolean = true;

  constructor(private rawgService: RawgService, private router: Router, private toastr: ToastrService) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.routeState = this.router.getCurrentNavigation()?.extras.state;

      if (this.routeState.genreSelected) {
        this.filterGames(this.routeState.genreSelected);
      } else if (this.routeState.user) {
        this.showToastMessage(this.routeState.user.email);
      }
    }
  }

  ngOnInit(): void {
    this.getGames();
  }

  // Bring games to be displayed
  // Invoked automatically on site
  async getGames() {
    this.rawgService.getUrlRequested('games', '').subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
      },
      error: (err) => this.msg = err
    });
  }

  // Bring games from nExt url provided
  // Invoked from button on the bottom
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

  // Order games on page based on parameter clicked
  async orderingGames(param: string) {
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
  // Invoked from search bar on top
  // Invoked from genres compo when user searches based on specific genre
  async filterGames(genreTerm?: string) {
    this.loading = true;
    this.data = {};

    const searchQery: string = genreTerm ? `games?genres=${genreTerm}` : `games?search=${this.searchTerm}`;

    this.rawgService.getUrlRequested(searchQery, '').subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
      },
      error: (err) => this.msg = err
    });

    this.searchTerm = '';
  }

  showToastMessage(user: string) {
    this.toastr.success(user.split('@')[0], 'Welcome', {
      timeOut: 2000,
      easeTime: 500
    });
  }

  // Edits game genres to be displayed
  // Invoked auto when pages loading
  getGameGenres(genres: Array<any>): Array<string> {
    const gameGenres: Array<string> = [];

    genres.forEach(genres => gameGenres.push(` ${genres.slug}`));

    return gameGenres.length > 2 ? gameGenres.slice(0,2) : gameGenres;
  }
}
