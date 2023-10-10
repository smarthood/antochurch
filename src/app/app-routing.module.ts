import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './core/components/nav/nav.component';
import { HomeComponent } from './core/pages/home/home.component';
import { HistoryComponent } from './core/pages/history/history.component';
import { NewsComponent } from './core/pages/news/news.component';
import { DonateComponent } from './core/pages/donate/donate.component';
import { GalleryComponent } from './core/pages/gallery/gallery.component';

const routes: Routes = [
  { path: '', redirectTo: 'main/news', pathMatch: 'full' },
  {
    path: 'main', component: NavComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'news', component: NewsComponent },
      { path: 'donate', component: DonateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
