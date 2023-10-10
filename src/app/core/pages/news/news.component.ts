import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  news!: any[]
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.apiService.getData('news').subscribe((res: any) => {
      this.news = res.documents
      console.log(this.news)
    })
  }
  viewUrl(url: string) {
    window.location.href = url
  }
  share(url: string) {
    if (navigator.share) {
      navigator
        .share({
          title: 'Antochurch',
          url: url ? url : 'https://antochurch.com/main/news'
        })
        .then(() => console.log('Sharing succeeded.'))
        .catch((error) => console.log('Sharing failed:', error));
    } else {
      console.log('Web Share API not supported.');
    }
  }
}
