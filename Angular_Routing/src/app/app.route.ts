import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { Routes } from '@angular/router';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { Component } from '@angular/core';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId', //<your-domain>/users/<uid>
    component: UserTasksComponent,
    children: [
      {
        path: 'tasks', //<your-domain>/users/<uid>/tasks
        component: TasksComponent,
      },
      {
        path: 'tasks/new', //<your-domain>/users/<uid>/tasks/new
        component: NewTaskComponent,
      },
    ],
  },
];
