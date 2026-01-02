import { Component, inject, input} from '@angular/core';
import { UsersService } from '../users.service';
import { RouterOutlet, RouterLink, ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {  
  //userId = input.required<string>();  
  message = input.required<string>();  
  userName = input.required<string>();
}

export const resolveUsername : ResolveFn<string> =
  (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
    const usersService = inject(UsersService);
    const userName = usersService.users.find((u) => u.id === activatedRoute.paramMap.get('userId'))?.name || '';
    return userName;
  }

export const resolveUserTitle:ResolveFn<string> = 
(activatedRoute, routerState) => {
  return resolveUsername(activatedRoute, routerState);
}

