import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Constants} from "../../shared/Constants";

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  public baseImagesPath = Constants.BASE_IMAGES_PATH;

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies( page: number = 1) {
    return this.http.get( Constants.BASE_API_PATH +
                               Constants.TOP_RATED_MOVIES_PATH + "?" +
                               Constants.PAGE_PARAM + page +"&"+
                               Constants.API_KEY + Constants.LANGUAGE_PARAM );
  }

  getMovieDetail( id ) {
    return this.http.get( Constants.BASE_API_PATH + Constants.DETAIL_OF_MOVIE_BY_ID + id  + "?" + Constants.API_KEY + "&language=en-US" );
  }
}

