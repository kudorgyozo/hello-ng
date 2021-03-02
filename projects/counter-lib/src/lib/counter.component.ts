import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent implements OnInit {
  @Input() counter = 0;
  @Output() counterChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  increase() {
    this.counter++;
    this.counterChanged.next(this.counter);
  }

  decrease() {
    this.counter--;
    this.counterChanged.next(this.counter);
  }
  
}