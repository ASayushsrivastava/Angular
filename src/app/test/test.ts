import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';

interface TestProps {
  id: number;
  title: string;
}

@Component({
  selector: 'app-test',
  imports: [FormsModule],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
  clicked = signal(false);
  isConnected = signal(true);
  user = signal({ name: 'ayush' });

  items = signal<TestProps[]>([
    { id: 1, title: 'someting' },
    { id: 2, title: 'something again' },
  ]);

  resetName() {
    // this.user.update((u) => ({ ...u, name: '' }));
    this.user = signal({ name: '' });
  }

  onClick() {
    this.clicked = signal(true);
  }

  // isConnected = true;
  // user = { name: 'ayush' };
  // items = [
  //   { id: 1, title: 'something' },
  //   { id: 2, title: 'something again' },
  // ];
}
