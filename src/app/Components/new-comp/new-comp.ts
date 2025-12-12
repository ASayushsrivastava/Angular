import { Component, inject } from '@angular/core';
import { CounterService } from '../../Services/counter-service';

@Component({
  selector: 'app-new-comp',
  imports: [],
  templateUrl: './new-comp.html',
  styleUrl: './new-comp.css',
})
export class NewComp {
  counter = inject(CounterService);
}
