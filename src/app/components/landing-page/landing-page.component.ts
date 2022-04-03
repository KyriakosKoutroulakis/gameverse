import { Component, OnInit } from '@angular/core';

import { RawgService } from 'src/app/services/rawg.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {
  // public id: number = 3498;
  // public data: Array<any> = [];
  // public msg: string = '';

  constructor(private rawgService: RawgService) { }

  ngOnInit(): void {
    // this.rawgService.getGameTrailer(this.id).subscribe({
    //   next: (res) => this.data = res.results[0].data,
    //   error: (err) => this.msg = err
    // });
  }
}
