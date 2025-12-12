import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComp } from './Components/new-comp/new-comp';
import { SampleFirst } from './Components/sample-first/sample-first';
import { Test } from './Components/test/test';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    /*RouterOutlet NewComp, Test, SampleFirst*/
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Ayush Srivastava');
}
