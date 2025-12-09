import { Component, signal } from '@angular/core';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-sample-first',
  standalone: true,
  imports: [],
  templateUrl: './sample-first.html',
  styleUrl: './sample-first.css',
})
export class SampleFirst {
  user = signal('ayush');
  newTask = signal('');

  // tasks
  tasks = signal<Task[]>([
    {
      id: 1,
      title: 'do angular',
      done: false,
    },
    {
      id: 2,
      title: 'do react',
      done: false,
    },
  ]);

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
  input = signal(10);
  val = signal(0);
  interval: any = null;

  start() {
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
  }
}
