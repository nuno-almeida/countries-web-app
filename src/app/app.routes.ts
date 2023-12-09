import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { MainComponent } from './components/home/main/main.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import(
        './components/login/login.component'
      ).then((x) => x.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import(
        './components/register/register.component'
      ).then((x) => x.RegisterComponent),
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'countries/:regionId',
        loadComponent: () =>
          import(
            './components/home/countries-by-region/countries-by-region.component'
          ).then((x) => x.CountriesByRegionComponent),
      },
      {
        path: 'visited',
        loadComponent: () =>
          import(
            './components/home/visited-list/visited-list.component'
          ).then((x) => x.VisitedListComponent),
      },
      {
        path: 'wish',
        loadComponent: () =>
          import(
            './components/home/wish-list/wish-list.component'
          ).then((x) => x.WishListComponent),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

