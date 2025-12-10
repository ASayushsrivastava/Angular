import { Directive, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appAnimate]',
  standalone: true,
  exportAs: 'appAnimate',
})
export class CounterDirective implements OnInit, OnChanges {
  @Input() type: 'task' | 'timer' = 'task';
  @Input() state: any;

  classes: string[] = [];

  ngOnInit() {
    this.classes = ['fade-in', ...this.computeClasses()];
  }

  ngOnChanges() {
    this.classes = ['fade-in', ...this.computeClasses()];
  }

  private computeClasses(): string[] {
    if (this.type === 'task') {
      return ['task-hover', ...(this.state ? ['task-done', 'task-grow'] : [])];
    }

    if (this.type === 'timer') {
      const val = Number(this.state);

      return [
        ...(val > 0 ? ['timer-glow'] : []),
        ...(val === 0 ? ['timer-blink', 'timer-bounce'] : []),
      ];
    }

    return [];
  }
}
