import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private readonly http = inject(HttpClient);

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('/content/articles.json');
  }
}