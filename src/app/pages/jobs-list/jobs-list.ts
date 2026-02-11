import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-jobs',
  imports: [RouterModule],
  templateUrl: './jobs-list.html'
})
export class JobsList {
  jobs = [
    { id: 1, title: 'Frontend Developer', company: 'Mantis', city: 'Chișinău' },
    { id: 2, title: 'Call Center Operator', company: 'Unifun', city: 'Remote' }
  ];
}
