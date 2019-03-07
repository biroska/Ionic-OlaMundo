import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private apiKey = "api_key=5380d3c9c1becdd26c9e31d900053498";
  private baseApiPath = "https://api.themoviedb.org/3/";
  private latestMoviesPath = "movie/latest";
  private topRatedMoviesPath = "movie/top_rated";

  public baseImagesPath = "https://image.tmdb.org/t/p/w300/";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies() {
    return this.http.get( this.baseApiPath + this.topRatedMoviesPath + "?" + this.apiKey + "&language=en-US&page=1" );
  }

}
