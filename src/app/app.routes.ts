import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ArticleDetail } from './pages/article-detail/article-detail';

export const routes: Routes = [
{
    path: '',
    component: Home,
  },
   {
    path: 'articulos/:slug',
    component: ArticleDetail,
  },

];
