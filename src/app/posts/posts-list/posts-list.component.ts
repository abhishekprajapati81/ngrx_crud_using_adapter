import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/modal/posts.modal';
import { deletePost, readpost } from 'src/app/postState/post.action';
import { getPosts } from 'src/app/postState/post.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts$ = this.store.select(getPosts);
  
  id!: number;
  title!: string;
  desc!: string;

  constructor(private router: Router, private store: Store) {}
  ngOnInit(): void {
  }
  
  onDeletePost(id: number | undefined) {
    if (confirm('Are you sure you want to delete this post?')) {
      this.store.dispatch(deletePost({ id }));
      console.log('Post delete');
    }
  }
  routeToPost(post: Post) {
    this.store.dispatch(readpost({ post }));
  }
}
