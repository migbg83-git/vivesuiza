import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ContentService } from '../../core/services/content.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly contentService = inject(ContentService);

  readonly articles$ = this.contentService.getArticles();
}