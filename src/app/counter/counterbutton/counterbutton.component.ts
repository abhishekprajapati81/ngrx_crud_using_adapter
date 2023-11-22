import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/state/counter.action';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
})
export class CounterbuttonComponent {

  constructor(private store:Store<AppState>){}
  onIncrement() {
    this.store.dispatch(increment())
    console.log('incremenet');
    
  }
  onDecremenet() {
    this.store.dispatch(decrement())
    console.log('decremenet');
    
  }
  onReset() {
    this.store.dispatch(reset());
    console.log('reset');
    
  }

}
