import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SlidesHomeComponent } from './../components/slides-home/slides-home.component';
import { NewsHomeComponent } from './../components/news-home/news-home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, SlidesHomeComponent, NewsHomeComponent]
})
export class HomePageModule {}
