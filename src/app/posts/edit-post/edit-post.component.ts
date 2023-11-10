import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { pipe } from 'rxjs';
import { post } from 'src/app/modal/posts.modal';
import { getPostById } from 'src/app/postState/post.selector';
import { appState } from 'src/app/store/app.state';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post!: post
  constructor(private route: ActivatedRoute, private store: Store<appState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      const postId = res.get('id');

      //console.log('TEst Id :',res.get('id'), res.get('title'));
      if (postId) {

        this.store.select('posts').subscribe((res) => {
          console.log(res.posts.filter((post) => post.id === (+postId)))
        })
      }
    })
  }
}


