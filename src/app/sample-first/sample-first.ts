import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterDirective } from '../counter-directive';
import { NgClass } from '@angular/common';
import { SampleFirstService } from '../sample-first';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-sample-first',
  standalone: true,
  imports: [FormsModule, CounterDirective, NgClass],
  templateUrl: './sample-first.html',
  styleUrl: './sample-first.css',
})
export class SampleFirst {
  /*
  user = signal('ayush');
  newTask = signal('');

  // tasks
  tasks = signal<Task[]>([]);

  // input method
  update(val: string) {
    this.newTask.set(val);
  }

  //actions
  add() {
    this.tasks.update((t) => [
      ...t,
      { id: t.length + 1, title: this.newTask().trim(), done: false },
    ]);

    this.newTask.set('');
  }

  remove(id: number) {
    this.tasks.update((t) => t.filter((task) => task.id !== id));
  }

  toggle(id: number) {
    this.tasks.update((t) =>
      t.map((task) => (task.id == id ? { ...task, done: !task.done } : task))
    );
  }

  // timer
  isStart = signal(false);
  input = signal(5);
  val = signal(0);
  interval: any = null;

  // input method
  updatetimer(value: string) {
    this.input.set(Number(value));
  }

  // action
  start() {
    this.isStart.set(true);
    this.val.set(this.input());
    this.interval = setInterval(() => {
      if (this.val() > 0) {
        this.val.set(this.val() - 1);
      } else {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  reset() {
    this.val.set(0);
    this.isStart.set(false);
  }

  // quote
  quote = signal('touch some grass!!');

  loadQuote() {
    // const res = fetch('https://dummyjson.com/quotes/random')
    //   .then((res) => res.json())
    //   .then((data) => this.quote.set(data.quote));

    // const res = await fetch('https://dummyjson.com/quotes/random');
    // const data = await res.json();
    // this.quote.set(data.quote);

    this.quote.set('touch some grass!!');
  }
    */

  constructor(public svc: SampleFirstService) {}

  get user() {
    return this.svc.user;
  }

  get newTask() {
    return this.svc.newTask;
  }

  get tasks() {
    return this.svc.tasks;
  }

  get isStart() {
    return this.svc.isStart;
  }

  get input() {
    return this.svc.input;
  }

  get val() {
    return this.svc.val;
  }

  get quote() {
    return this.svc.quote;
  }

  update(v: string) {
    this.svc.update(v);
  }
  add() {
    this.svc.add();
  }
  remove(id: number) {
    this.svc.remove(id);
  }
  toggle(id: number) {
    this.svc.toggle(id);
  }

  updatetimer(v: string) {
    this.svc.updatetimer(v);
  }
  start() {
    this.svc.start();
  }
  stop() {
    this.svc.stop();
  }
  reset() {
    this.svc.reset();
  }
}
