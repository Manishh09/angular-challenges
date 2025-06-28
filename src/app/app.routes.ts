import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostsAsyncComponent } from './posts-async/posts-async.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: 'posts-async',
        component: PostsAsyncComponent
    }
];
