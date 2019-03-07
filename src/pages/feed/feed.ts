import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MovieProvider} from "../../providers/movie/movie";

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [MovieProvider]
})
export class FeedPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private movieProvider: MovieProvider ) {
  }

  public feed_object = {
    titulo: "Dr. Brown",
    data: "Março, 5 de 2019",
    descricao: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
    qtd_likes: "5",
    qtd_comentarios: "7",
    data_post: "11h ago"
  }

  public lista_filmes = new Array<any>();

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');

    this.movieProvider.getLatestMovies().subscribe( value => {
                                                            console.log(value);
                                                            const response = (value as any);
                                                            this.lista_filmes = response.results;
                                                          },
                                                    error1 => {
                                                          console.log(error1);
                                                          }
                                                  );

  }

}
