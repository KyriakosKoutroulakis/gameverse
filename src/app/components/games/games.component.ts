import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

import { RawgService } from 'src/app/services/rawg.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit {
  public data: any;
  public msg: string = '';
  public platforms: Array<string> = ['PC', ' PlayStation', ' Xbox'];
  public gameGenres: Array<string> = ['Action', ' RPG', ' Adventure', 'Violence'];
  public loading: boolean = true;

  constructor(private rawgService: RawgService, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.rawgService.getUrlRequested('games').subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
      },
      error: (err) => this.msg = err
    });
    this.loading = false;
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
    this.scrollBackToTop('top');
  }
  
  // After fetch next url page
  // Scroll back to top
  private scrollBackToTop(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}

