import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './list-page/list-page.component';
import { ViewArticleComponent } from './view-article/view-article.component';
const appRoutes: Routes = [
  {
    path: '',
    component: ListPageComponent
  },
  {
    path: 'articles/:id',
    component: ViewArticleComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
