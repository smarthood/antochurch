import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.pexels.com/v1';
  private apiKey = '563492ad6f9170000100000133a365f58c5e4741ba2712ea4ce71f94'; // Replace with your actual API key

  constructor(private http: HttpClient) { }

  getImages(query: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: this.apiKey,
    });

    const url = `${this.apiUrl}/search?query=${query}`;
    return this.http.get(url, { headers });
  }
}
