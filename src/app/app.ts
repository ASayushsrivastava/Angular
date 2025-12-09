import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComp } from './new-comp/new-comp';
import { Test } from './test/test';
import { SampleFirst } from './sample-first/sample-first';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, /*NewComp, Test,*/ SampleFirst],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Ayush Srivastava');
}
