import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/modal/posts.modal';
import { selectEditPost } from 'src/app/postState/post.selector';
import { AppState } from 'src/app/store/app.state';
import { Observable, tap } from 'rxjs';
import { updatePost } from 'src/app/postState/post.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  title!: string;
  id!: number;
  desc!: string;

  updateForm!: FormGroup;

  updatePost$!: Observable<Post>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((parms) => {
      const id = parms.get('id');
      this.id = parseInt(id ?? '0');
    });

    this.store.select(selectEditPost).subscribe((val) => {
      this.updateForm = new FormGroup({
        title: new FormControl(val?.title, [Validators.required]),
        desc: new FormControl(val?.desc, [Validators.required]),
      });
    });
  }

  onUpdate() {
    console.log(this.updateForm.value, 'post data add');
    if (!this.updateForm.valid) {
      return;
    }
    const post: Post = {
      title: this.updateForm.value.title,
      desc: this.updateForm.value.desc,
    };
    const id = this.id;

    this.store.dispatch(updatePost({ post, id }));
  }
}
