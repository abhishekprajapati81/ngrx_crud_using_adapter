import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customeIncremenet } from 'src/app/state/counter.action';
import { CounterType } from 'src/app/state/counter.state';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-custome-counter-input',
  templateUrl: './custome-counter-input.component.html',
})
export class CustomeCounterInputComponent {

  constructor(private store: Store<AppState>) { }
  value!: number

  onclick() {
    this.store.dispatch(customeIncremenet({ count: + this.value }))
    console.log(this.value);
    
  }
}
