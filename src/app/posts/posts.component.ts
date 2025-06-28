import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.interface';
import { catchError, delay, finalize, of } from 'rxjs';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  isLoading = false;
  hasError = false;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.isLoading = true;
    this.hasError = false;
    
    this.postService.getPosts()
      .pipe(
        delay(500), // Simulate loading delay
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (response) => {
          if (response) {
            this.posts = response;
          }
        },
        error: (error) => {
          this.hasError = true;
          this.posts = [];
          console.error('Error fetching posts:', error);
        }
      });
  }

  // using async pipe approach

  posts$ = this.postService.getPosts().pipe(
    delay(500), // Simulate loading delay
    catchError((error) => {
      this.hasError = true;
      console.error('Error fetching posts:', error);
      return of([]);
    })
  );

  refreshData(): void {
    this.fetchPosts();
  }
}
