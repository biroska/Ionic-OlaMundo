import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {MovieProvider} from "../../providers/movie/movie";

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [MovieProvider]
})
export class FilmeDetalhesPage {

  private loading;
  private refresher;
  private isRefreshing: boolean = false;

  public filme = "";
  public filmeId = "";

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               public loadingController: LoadingController,
               private movieProvider: MovieProvider ) {
  }

  ionViewDidEnter() {

    this.filmeId = this.navParams.get("filmeId");

    console.log('this.filme: ' + this.filmeId );

    this.carregarFilmes( this.filmeId );
  }


  private carregarFilmes( filmeId ) {

    this.abrirCarregando();

    this.movieProvider.getMovieDetail( filmeId ).subscribe(
      value => {
        const response = (value as any);
        this.filme = response;
        this.fecharCarregando();
      },
      error1 => {
        console.log(error1);
        this.fecharCarregando();
      }
    );
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

    this.carregarFilmes( this.filmeId );
  }
}
