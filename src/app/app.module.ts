import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {FeedPageModule} from "../pages/feed/feed.module";
import {IntroPage} from "../pages/intro/intro";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {MovieProvider} from '../providers/movie/movie';
import {PerfilPageModule} from "../pages/perfil/perfil.module";
import {SobrePageModule} from "../pages/sobre/sobre.module";
import {ConfiguracoesPageModule} from "../pages/configuracoes/configuracoes.module";
import {FilmeDetalhesPage} from "../pages/filme-detalhes/filme-detalhes";
import {FilmeDetalhesPageModule} from "../pages/filme-detalhes/filme-detalhes.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    IntroPage
  ],
  imports: [
    BrowserModule,
    FeedPageModule,
    HttpModule,
    HttpClientModule,
    ConfiguracoesPageModule,
    PerfilPageModule ,
    SobrePageModule,
    FilmeDetalhesPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
