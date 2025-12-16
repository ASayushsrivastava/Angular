import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'service-example',
    loadComponent: () => import('./Components/new-comp/new-comp').then((m) => m.NewComp),
  },
  {
    path: 'sample-service',
    loadComponent: () =>
      import('./Components/sample-first/sample-first').then((m) => m.SampleFirst),
  },
  {
    path: 'parent-child',
    loadComponent: () =>
      import('./Components/parent.component/parent.component').then((m) => m.ParentComponent),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
