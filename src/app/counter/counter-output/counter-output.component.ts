import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
})
export class CounterOutputComponent implements OnInit {
  counter!: number;
  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    console.log()
    this.store.select('counter').subscribe((res) => {
      this.counter = res.counter
    })
  }
}
