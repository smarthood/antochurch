import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images: any[] = [];

  constructor(private pexelsService: ApiService) { }

  ngOnInit(): void {
    this.getPexelsImages('jesus');
  }

  getPexelsImages(query: string): void {
    this.pexelsService.getImages(query).subscribe(
      (response) => {
        this.images = response.photos;
      },
      (error) => {
        console.error('Error fetching images:', error);
      }
    );
  }
}
