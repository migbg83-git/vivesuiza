import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-article-detail',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.scss',
})
export class ArticleDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly contentService = inject(ContentService);

  readonly article$ = this.route.paramMap.pipe(
    map((params) => params.get('slug') ?? ''),
    switchMap((slug) => this.contentService.getArticleBySlug(slug))
  );
}