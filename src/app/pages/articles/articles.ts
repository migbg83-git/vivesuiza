import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-articles',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './articles.html',
  styleUrl: './articles.scss',
})
export class Articles {
  private readonly contentService = inject(ContentService);

  readonly articles$ = this.contentService.getArticles();
}