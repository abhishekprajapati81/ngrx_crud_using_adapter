import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { post } from 'src/app/modal/posts.modal';
import { deletePost } from 'src/app/postState/post.action';
import { getPosts } from 'src/app/postState/post.selector';
import { appState } from 'src/app/store/app.state';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts!: Observable<post[]>
  constructor(private store: Store<appState>) {

  }
  ngOnInit(): void {
    this.posts = this.store.select(getPosts)
  }

  onDeletePost(id:number){
    if (confirm("Are you sure you want to delete this post?")) {
      this.store.dispatch(deletePost({ id }));
      console.log('Post delete');
      
    }
  }
}
