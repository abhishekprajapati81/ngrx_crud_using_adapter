import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/modal/posts.modal';
import { updateAllPost } from 'src/app/postState/post.action';
import { selectEditPost } from 'src/app/postState/post.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  // post!: post
  title!: string;
  id: number | undefined;
  desc!: string;

  updateForm!: FormGroup;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectEditPost).subscribe((val) => {
      console.log(val);
      this.id = val?.id
      this.updateForm = new FormGroup({
        title: new FormControl(val?.title, [Validators.required]),
        description: new FormControl(val?.desc, [Validators.required]),
      });
    });
  }

  onUpdate() {
    console.log(this.updateForm.value, 'post data add');
    if (!this.updateForm.valid) {
      return;
    }
    const post: Post = {
      id: this.id,
      title: this.updateForm.value.title,
      desc: this.updateForm.value.description
    }
    const id = post.id;
    
    this.store.dispatch(updateAllPost({ post, id }));
  }
}
