import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly contentService = inject(ContentService);

  readonly articles$ = this.contentService.getArticles();
}