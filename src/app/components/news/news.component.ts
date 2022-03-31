import { Component, OnInit } from '@angular/core';

import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {
  public data: any;
  public msg: any;
  public loading: boolean = true;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getVideoGamesNews().subscribe({
      next: res => this.data = res,
      error: err => this.msg =  err 
    })
    this.loading = false;
  }

  getSearchTerm(): void {
    this.loading = true;
    this.newsService.getSearchedNews('ps5').subscribe({
      next: res => this.data = res,
      error: err => this.msg =  err 
    })
    this.loading = false;
  }

}
