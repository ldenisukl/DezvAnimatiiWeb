import { Route } from '@angular/router';
import { Home } from './pages/home/home';
import { JobsList } from './pages/jobs-list/jobs-list';
import { JobDetails } from './pages/job-details/job-details';
import { Apply } from './pages/apply/apply';
import { Reviews } from './pages/reviews/reviews';

export const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'jobs', component: JobsList },
  { path: 'jobs/:id', component: JobDetails },
  { path: 'apply', component: Apply },
  { path: 'reviews', component: Reviews },
];
