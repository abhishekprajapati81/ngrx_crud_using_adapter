// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { Post } from 'src/app/modal/posts.modal';

// @Injectable({providedIn: 'root'})
// export class PostInfrastructure {
//     constructor(private http:HttpClient) { }

//     getPostById(id : number) : Observable<Post> {
//         console.log('get http data')
//         return of({
//             id: 5,
//             title:"Test User",
//             desc: "Test Description"
//         } as Post)
//         // return this.http.get<Post>('www.google.com',{params : {id}});
//     }
    
// }