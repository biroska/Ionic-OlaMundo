import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {MovieProvider} from "../../providers/movie/movie";
import {FilmeDetalhesPage} from "../filme-detalhes/filme-detalhes";

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
              public loadingController: LoadingController,
              private movieProvider: MovieProvider) {
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

  private loading;
  private refresher;
  private isRefreshing: boolean = false;
  public infiniteScroll;

  public lastPage: number = 1;

  ionViewDidEnter() {
    console.log('ionViewDidLoad FeedPage');
    this.carregarFilmes();
  }

  abrirDetalhes( filme ){
    console.log( "Filme Object: " + filme );
    this.navCtrl.push(FilmeDetalhesPage, {filmeId: filme.id });
  }

  abrirCarregando() {
    console.log("AbrirCarregando");
    this.loading = this.loadingController.create({
      content: "Please wait...."
    });
    this.loading.present();
  }

  fecharCarregando() {
    console.log("FecharCarregando");
    this.loading.dismiss();

    if ( this.isRefreshing ){
      this.refresher.complete();
      this.isRefreshing = false;
    }

  };

  doRefresh( refresher ) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.carregarFilmes();
  }

  private carregarFilmes(newPage: boolean = false) {

    this.abrirCarregando();
    this.movieProvider.getLatestMovies( this.lastPage ).subscribe(
      value => {
        const response = (value as any);

        if (newPage) {
          this.lista_filmes = this.lista_filmes.concat(response.results);
          this.infiniteScroll.complete();
        } else {
          this.lista_filmes = response.results;
        }
        console.log(value);
        this.fecharCarregando();
      },
      error1 => {
        console.log(error1);
        this.fecharCarregando();
      }
    );
  }

  doInfiniteScroll(infiniteScroll){
    this.lastPage++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
  }
}
