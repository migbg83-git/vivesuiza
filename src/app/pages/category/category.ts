import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-category',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class Category {
  private readonly route = inject(ActivatedRoute);
  private readonly contentService = inject(ContentService);

  readonly category$ = this.route.paramMap.pipe(
    map((params) => params.get('category') ?? '')
  );

  readonly articles$ = this.category$.pipe(
    switchMap((category) => this.contentService.getArticlesByCategory(category))
  );
}