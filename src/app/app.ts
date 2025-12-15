import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NewComp } from './Components/new-comp/new-comp';
import { SampleFirst } from './Components/sample-first/sample-first';
import { Test } from './Components/test/test';
import { ParentComponent } from './Components/parent.component/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ParentComponent /*NewComp, Test, SampleFirst*/,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Ayush Srivastava');
}
