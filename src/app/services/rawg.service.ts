import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RawgService {
  private rawgApiUrl: string = environment.Rawg_Api_Url;
  private httpHeaders = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');
  private httpParams = new HttpParams();

  constructor(private rawgHttp: HttpClient) { }

  // @desc  Fetch data /games -- /genres 
  // @route GET url/searchTerm
  getUrlRequested(searchTerm: string, param: string): Observable<any> {
    const params = this.createParams(param);

    return this.rawgHttp.get(`${this.rawgApiUrl}/${searchTerm}`, { headers: this.httpHeaders, params })
      .pipe(
        retry(1),
        catchError(error => throwError(() => `ERROR: ${error}` ))
      )
  }

  // @desc  Fetch next page
  // @route GET url/searchTerm&page=<number>
  getNextPage(nextUrl: string): Observable<any> {
    return this.rawgHttp.get(nextUrl, { headers: this.httpHeaders })
      .pipe(
        retry(1),
        catchError(error => throwError(() => `ERROR: ${error}` ))
      )
  }

  // @desc  Fetch game details
  // @route GET url/games/:id
  getGameDetails(id: number): Observable<any> {
    const params = this.createParams('');

    return this.rawgHttp.get(`${this.rawgApiUrl}/games/${id}`, { headers: this.httpHeaders, params })
      .pipe(
        retry(1),
        catchError(error => throwError(() => `ERROR: ${error}` ))
      )
  }

  // Helper private method createParams()
  // Returning generated params
  private createParams(param: string): HttpParams {
    if (param !== '') {
      return this.httpParams
        .set('ordering', `-${param}`)
        .set('key', environment.Rawg_Api_Key);
    } else {
      return this.httpParams.set('key', environment.Rawg_Api_Key);
    } 
  }
}
