import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../services/post.service';
import { Post, PostsState } from '../models/post.interface';
import { BehaviorSubject, Subject, catchError, delay, map, startWith, switchMap, takeUntil } from 'rxjs';


@Component({
    selector: 'app-posts-async',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './posts-async.component.html',
    styleUrls: ['./posts-async.component.scss']
})
export class PostsAsyncComponent implements OnInit, OnDestroy {
    // Subject to trigger data refresh
    private refresh$ = new BehaviorSubject<void>(undefined);

    // Subject to signal component destruction
    private destroy$ = new Subject<void>();

    /**
     * Observable stream that manages post data loading states.
     * 
     * This observable:
     * - Triggers when refresh$ emits a value
     * - Emits a loading state immediately (isLoading: true)
     * - Fetches posts from the PostService
     * - Transforms the response into a PostsState object
     * - Handles errors by emitting an error state
     * - Completes automatically when the component is destroyed
     * 
     * @returns An Observable of PostsState containing:
     *   - posts: Array of post objects
     *   - isLoading: Boolean indicating if data is being loaded
     *   - error: Error message or null if no error occurred
     */
    posts$ = this.refresh$.pipe(
        takeUntil(this.destroy$),
        switchMap(() => this.postService.getPosts().pipe(
            delay(500), // Simulate loading delay
            map(posts => ({ posts, isLoading: false, error: null } as PostsState)),
            catchError(error => {
                console.error('Error fetching posts:', error);
                return [{ posts: [], isLoading: false, error: 'Failed to load data. Please try again later.' } as PostsState];
            }),
            startWith({ posts: [], isLoading: true, error: null } as PostsState) // Initial loading state
        ))
    );

    constructor(private postService: PostService) { }

    ngOnInit(): void {
        // Initial load is handled by BehaviorSubject's initial value
    }

    ngOnDestroy(): void {
        // Complete and clean up all subscriptions
        this.destroy$.next();
        this.destroy$.complete();
        this.refresh$.complete();
    }

    refreshData(): void {
        this.refresh$.next();
    }
}
