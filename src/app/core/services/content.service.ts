import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ContentService {
    private readonly http = inject(HttpClient);

    getArticles(): Observable<Article[]> {
        return this.http.get<Article[]>('/content/articles.json');
    }

    getArticleBySlug(slug: string): Observable<Article | undefined> {
        return this.getArticles().pipe(
            map((articles) => articles.find((article) => article.slug === slug))
        );
    }

    getArticlesByCategory(category: string): Observable<Article[]> {
        return this.getArticles().pipe(
            map((articles) => articles.filter((article) => article.category === category))
        );
    }

}