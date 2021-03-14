import { Component, OnInit } from '@angular/core';
import {PostsService} from './posts.service';

@Component({
  selector: 'app-posts',
template: `Posts component`
})
export class PostsComponent implements OnInit {
posts = [];
  // @ts-ignore
  message: string;

  constructor(private service: PostsService) { }

  ngOnInit(): void {
    this.service.fetch().subscribe(el => {
      // @ts-ignore
      this.posts = el;
    });
  }
add(title: string): void {
    const post = { title};
    this.service.create(post).subscribe(() => {
      // @ts-ignore
      this.posts.push(post);
    }, err => this.message = err);
}

delete(id: any): void {
    if (window.confirm('Are you sure?')){
      this.service.remove(id).subscribe();
    }
}
}
