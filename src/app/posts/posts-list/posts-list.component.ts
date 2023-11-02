import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { post } from 'src/app/modal/posts.modal';
import { appState } from 'src/app/store/app.state';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {
  posts!:Observable<post>
constructor(private  store:Store<appState>){
  
}
}
