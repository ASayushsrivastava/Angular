import { Injectable, signal } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SampleFirstService {
  user = signal('ayush');

  newTask = signal('');
  tasks = signal<Task[]>([]);

  constructor() {}

  update(val: string) {
    this.newTask.set(val);
  }

  add() {
    const title = this.newTask().trim();
    if (!title) return;

    this.tasks.update((t) => [...t, { id: t.length + 1, title, done: false }]);

    this.newTask.set('');
  }

  remove(id: number) {
    this.tasks.update((t) => t.filter((task) => task.id !== id));
  }

  toggle(id: number) {
    this.tasks.update((t) =>
      t.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  }

  isStart = signal(false);
  input = signal(5); // default
  val = signal(0);

  private interval: any = null;

  updatetimer(value: string | number) {
    const num = Number(value) || 0;
    this.input.set(num);
  }

  start() {
    if (this.interval) return; // already running

    this.isStart.set(true);
    this.val.set(this.input());

    this.interval = setInterval(() => {
      const v = this.val();
      if (v > 0) {
        this.val.set(v - 1);
      } else {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  reset() {
    this.stop();
    this.val.set(0);
    this.isStart.set(false);
  }

  isStarted() {
    return this.isStart();
  }

  quote = signal('touch some grass!!');

  // async loadQuote() {
  //   try {
  //     // safe default if you don't want to call external API in dev
  //     const res = await fetch('https://dummyjson.com/quotes/random');
  //     if (!res.ok) {
  //       throw new Error(`HTTP ${res.status}`);
  //     }
  //     const data = await res.json();
  //     // dummyjson returns { id, quote, author }
  //     this.quote.set(data?.quote ?? 'No quote found');
  //   } catch (err) {
  //     // fallback text on error
  //     this.quote.set('touch some grass!!');
  //     console.error('Quote load failed:', err);
  //   }
  // }
}
