import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.apiService.getData('news').subscribe((res: any) => {
      console.log(res)
    })
  }
}
