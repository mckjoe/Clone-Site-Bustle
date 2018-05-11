import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './list-page/list-page.component';
const appRoutes: Routes = [
  {
    path: '',
    component: ListPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
