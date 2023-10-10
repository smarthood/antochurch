import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://firestore.googleapis.com/v1/projects/';
  private apiKey = environment.firebase.projectId; // Replace with your actual API key

  constructor(private http: HttpClient) { }

  getData(query: string): Observable<any> {
    const url = `${this.apiUrl}${this.apiKey}/databases/(default)/documents/${query}`;
    return this.http.get(url);
  }
}
