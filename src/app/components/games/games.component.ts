import { Component, OnInit } from '@angular/core';

import { RawgService } from 'src/app/services/rawg.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

/** 
* * important Dynamically push to platformsArray after subrcribe
* * important Search name in page
* TODO: filterGames() fix
*
*/

export class GamesComponent implements OnInit {
  public data: any;
  public msg: string = '';
  public searchName: string = '';
  public platforms: Array<string> = ['PC', ' PlayStation', ' Xbox'];               // Problem with dynamic pushing
  public gameGenres: Array<string> = ['Action', ' RPG', ' Adventure', 'Violence']; // after subscribing
  public loading: boolean = true;

  constructor(private rawgService: RawgService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.rawgService.getUrlRequested('games', '').subscribe({
      next: (res) => this.data = res,
      error: (err) => this.msg = err
    });
    this.loading = false;
  }

  getNextPage(url: string) {
    this.loading = true;
    this.rawgService.getNextPage(url).subscribe({
      next: (res) => this.data = res,
      error: (err) => this.msg = err
    });

    this.loading = false;
    // Scroll back on top of the page
    window.scroll(0,0);
  }

  orderingGames(param: string) {
    this.loading = true;
    this.rawgService.getUrlRequested('games', param).subscribe({
      next: (res) => this.data = res,
      error: (err) => this.msg = err
    });
    this.loading = false;
  }

  filterGames() {
    console.log(this.searchName);
    this.searchName = '';
  }
}

