import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { CodeOfConductComponent} from './pages/code-of-conduct/code-of-conduct.component';
import { AppListComponent } from './pages/app-list/app-list.component';
import { AppDetailsComponent } from './pages/app-details/app-details.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'conduct',
    component: CodeOfConductComponent
  },
  {
    path: 'apps',
    component: AppListComponent
  },
  {
    path: 'apps/category/:categoryId',
    component: AppListComponent
  },
  {
    path: 'apps/collection/:collectionId',
    component: AppListComponent
  },
  {
    path: 'apps/search/:searchKeyword',
    component: AppListComponent
  },
  {
    path: 'apps/details/:appId',
    component: AppDetailsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
