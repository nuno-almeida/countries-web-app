import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { MainComponent } from './components/home/main/main.component';
import { VisitedListComponent } from './components/home/visited-list/visited-list.component';
import { WishListComponent } from './components/home/wish-list/wish-list.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
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
        component: VisitedListComponent,
      },
      {
        path: 'wish',
        component: WishListComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

// TODO lazy load
