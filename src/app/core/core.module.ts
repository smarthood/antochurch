import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { NewsComponent } from './pages/news/news.component';
import { YoutubeComponent } from './pages/youtube/youtube.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { DonateComponent } from './pages/donate/donate.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

const material = [MatSidenavModule, MatToolbarModule, MatDividerModule, MatButtonModule, MatIconModule, FlexLayoutModule]
@NgModule({
  declarations: [
    NavComponent,
    NewsComponent,
    YoutubeComponent,
    HomeComponent,
    HistoryComponent,
    DonateComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    material
  ],
  exports: [material]
})
export class CoreModule { }
