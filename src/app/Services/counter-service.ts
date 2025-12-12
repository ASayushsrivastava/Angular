import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count = signal(0);

  doubled = computed(() => this.count() * 2);

  increment() {
    this.count.update((n) => n + 1);
  }
  decrement() {
    this.count.update((n) => n - 1);
  }

  reset() {
    this.count.set(0);
  }
}
