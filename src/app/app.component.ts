import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import { getPoststed } from './postState/post.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx';

  constructor(private store:Store){}

  // postState = this.store.select(getPoststed);

}
