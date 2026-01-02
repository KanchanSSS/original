import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { resolveUsername, resolveUserTitle, UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routes as userRoutes } from './users/users.routes';
import { inject } from '@angular/core';

const dummyCanMatch : CanMatchFn = (route, segments) => {
    const router = inject(Router);
    const canGrantAccess = Math.random();
    if(canGrantAccess < 1)
        return true;
    return new RedirectCommand(router.parseUrl('/unauthorized'));
}

export const routes: Routes = [
  {
    path: '', //<your-domain>
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId', //<your-domain>/users/<uid>
    component: UserTasksComponent,
    canMatch:[dummyCanMatch],
    children: userRoutes,
    data:{
        message:'Hello!'
    },
    resolve:{
        userName : resolveUsername
    },
    title: resolveUserTitle
  },
  {
    path:'**', //invalid path for ex: //<your-domain>/tasks
    component: NotFoundComponent
  }
];
