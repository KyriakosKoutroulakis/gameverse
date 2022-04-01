import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RawgService } from 'src/app/services/rawg.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  public gameId: any;
  public data: any;
  public msg: string = '';
  public loading: boolean = true;

  constructor(private route: ActivatedRoute, private rawgService: RawgService) { }

  ngOnInit(): void {
    this.route.params.subscribe(val => this.gameId = val);
    
    this.rawgService.getGameDetails(this.gameId.id).subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
      },
      error: (err) => this.msg = err
    });
  }

  fetchTags(tags: Array<any>): Array<string> {
    const gameTags: Array<string> = [];

    tags.forEach(tag => gameTags.push(` #${tag.slug}`));

    return gameTags.length > 15 ? gameTags.slice(0,15) : gameTags;
  }
}
