import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'all-countries',
    loadComponent: () => import('./all-countries/all-countries.page').then( m => m.AllCountriesPage)
  },
  {
    path: 'news',
    loadComponent: () => import('./news/news.page').then( m => m.NewsPage)
  },
  {
    path: 'weather',
    loadComponent: () => import('./weather/weather.page').then( m => m.WeatherPage)
  },
];
