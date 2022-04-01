import { Component, OnInit } from '@angular/core';

import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {
  public searchName: string = '';
  public data: any;
  public msg: any;
  public loading: boolean = true;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getVideoGamesNews().subscribe({
      next: res => {
        this.data = res;
        this.loading = false;
      },
      error: err => this.msg =  err 
    })
  }

  getSearchTerm(): void {
    this.loading = true;

    this.newsService.getSearchedNews(this.searchName).subscribe({
      next: res => {
        this.data = res;
        this.loading = false;
      },
      error: err => this.msg =  err 
    })
  }
}
