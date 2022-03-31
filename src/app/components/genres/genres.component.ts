import { Component, OnInit } from '@angular/core';

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

  constructor(private rawgService: RawgService) { }

  ngOnInit(): void {
    this.rawgService.getUrlRequested('genres', '').subscribe({
      next: (res) => this.data = res,
      error: (err) => this.msg = err
    });
    this.loading = false;
  }

  findGamesByGenre(gameType: string) {
    console.log(gameType.toLocaleLowerCase());
  }
}
