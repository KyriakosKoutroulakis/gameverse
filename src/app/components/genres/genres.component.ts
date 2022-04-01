import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RawgService } from 'src/app/services/rawg.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})

export class GenresComponent implements OnInit {
  public data: any;
  public msg: string = '';
  public loading: boolean = true;

  constructor(private rawgService: RawgService, private router: Router) { }

  ngOnInit(): void {
    this.rawgService.getUrlRequested('genres', '').subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
      },
      error: (err) => this.msg = err
    });
  }

  searchGames(term: string) {
    this.router.navigate(['/games'], {
      state: {
        genreSelected :term.toLocaleLowerCase()
      }
    })
  }
}
