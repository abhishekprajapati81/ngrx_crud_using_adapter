import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterbuttonComponent } from './counter/counterbutton/counterbutton.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomeCounterInputComponent } from './counter/custome-counter-input/custome-counter-input.component';
import { FormsModule } from '@angular/forms';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { postReducer } from './postState/post.reducer';
import { appReducer } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterbuttonComponent,
    CustomeCounterInputComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
