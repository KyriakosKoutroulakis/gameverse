import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RawgService {
  private url: string = 'https://api.rawg.io/api';
  private httpHeaders = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');
  private httpParams = new HttpParams();

  constructor(private rawgHttp: HttpClient) { }

  // @desc  Fetch data /games -- /genres 
  // @route GET url/searchTerm
  getUrlRequested(searchTerm: string): Observable<any> {
    const params = this.createParams();

    return this.rawgHttp.get(`${this.url}/${searchTerm}`, { headers: this.httpHeaders, params })
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

  private createParams(): HttpParams {
    return this.httpParams
      .set('key', '1099f60b4c2f421d9323898b4713b530');
  }
}
