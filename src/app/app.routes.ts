import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home')
        .then(m => m.Home),
  },
  {
    path:'contact',
    loadComponent: () =>
      import('./components/contact/contact')
        .then(m => m.Contact),
  },
  {
    path:'projects',
    loadComponent: () =>
      import('./components/projects/projects')
        .then(m => m.Projects),
  },
  {
    path:'skills',
    loadComponent: () =>
      import('./components/skills/skills')
        .then(m => m.Skills),
  },
  {
    path:'hero',
    loadComponent: () =>
      import('./components/hero/hero')
        .then(m => m.Hero),
  },
  {
    path:'navbar',
    loadComponent: () =>
      import('./core/navbar/navbar')
        .then(m => m.Navbar),
  },
  {
    path:'footer',
    loadComponent: () =>
      import('./core/footer/footer')
        .then(m => m.Footer),   
  }

];
