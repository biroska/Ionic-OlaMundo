import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedPage } from './feed';
import {FilmeDetalhesPageModule} from "../filme-detalhes/filme-detalhes.module";

@NgModule({
  declarations: [
    FeedPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedPage),
    FilmeDetalhesPageModule
  ],
})
export class FeedPageModule {}
