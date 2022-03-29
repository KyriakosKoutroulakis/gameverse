import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  private videoGamesNewsApiUrl:string =  environment.Videogames_News_Api_Url;
  private bingNewsSearchApiUrl:string =  environment.Bing_News_Search_Api_Url;
  private httpHeaders = new HttpHeaders();
  private httpParams = new HttpParams();

  constructor(private newsHttp: HttpClient) { }

  // @desc  Fetch news page
  // @route GET Videogames News Api url
  getVideoGamesNews(): Observable<any> {
    const headers = this.createHeaders('news');
       
    return this.newsHttp.get(this.videoGamesNewsApiUrl, { headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => `ERROR: ${error}` ))
      )
  }

  // @desc  Fetch query result
  // @route GET Bing News Search
  getSearchedNews(query: string): Observable<any> {
    const params =  this.createParams(query);
    const headers = this.createHeaders('bing');
    
    return this.newsHttp.get(this.bingNewsSearchApiUrl, { headers, params })
      .pipe(
        retry(1),
        catchError(error => throwError(() => `ERROR: ${error}` ))
      )
  }

  // Private method createHeaders()
  // Returning generated headers
  private createHeaders(specifyApi: string): HttpHeaders {
    if (specifyApi === 'news') {
      return this.httpHeaders
        .set('Content-Type', 'application/json')
        .set('X-RapidAPI-Key', environment.Rapid_Api_Key)
        .set('X-RapidAPI-Host', environment.Videogames_News_Api_Host);
    } else {
      return this.httpHeaders
        .set('X-BingApis-SDK', 'true')
        .set('X-RapidAPI-Host', environment.Bing_News_Search_Api_Host)
        .set('X-RapidAPI-Key', environment.Rapid_Api_Key);
    }  
  }

  // Private method createParams()
  // Returning generated params for Bing Search Api
  private createParams(query: string): HttpParams {
    return this.httpParams
      .set('q', query)
      .set('textFormat', 'Raw')
      .set('safeSearch', 'Off')
      .set('freshnes', 'Day');
  }
}
