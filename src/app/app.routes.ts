import { Routes } from '@angular/router';
import { BlogPosts } from './blog-posts/blog-posts';
import { BlogPostComments } from './blog-post-comments/blog-post-comments';
import { BlogUserAlbums } from './blog-user-albums/blog-user-albums';
import { BlogAlbumPhotos } from './blog-album-photos/blog-album-photos';
import { BlogUserTodos } from './blog-user-todos/blog-user-todos';
import { NotFound } from './not-found/not-found';
import { BlogHome } from './blog-home/blog-home';
import { BlogLogin } from './blog-login/blog-login';
import { AuthGuard } from './services/auth-guard';
import { BlogUsers } from './blog-users/blog-users';

export const routes: Routes = [
    { path: '', component: BlogHome, pathMatch:'full' },
    { path: 'posts', component: BlogPosts, pathMatch:'full', canActivate: [AuthGuard] },
    { path: 'comments', component: BlogPostComments, pathMatch:'full', canActivate: [AuthGuard] },
    { path: 'albums', component: BlogUserAlbums, pathMatch:'full', canActivate: [AuthGuard] },
    { path: 'photos', component: BlogAlbumPhotos, pathMatch:'full', canActivate: [AuthGuard] },
    { path: 'todos', component: BlogUserTodos, pathMatch:'full', canActivate: [AuthGuard] },
    { path: 'users', component: BlogUsers, pathMatch:'full', canActivate: [AuthGuard] },

    // login route
    { path: 'login', component: BlogLogin },

    // Wildcard route for a 404 page
    { path:'**', component: NotFound},
];
