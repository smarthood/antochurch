import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images: any[] = [];

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.apiService.getData('gallery').subscribe((res) => {
      console.log(res)
      this.images = res.documents
    })
  }
  viewImage(url: string) {
    window.location.href = url
  }
}
