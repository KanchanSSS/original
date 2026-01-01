import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterOutlet, RouterLink, ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent implements OnInit {
  userName = '';
  //userId = input.required<string>();
  private userService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  message = input.required<string>();

  //userName = computed(() => this.userService.users.find(u => u.id === this.userId())?.name)

  ngOnInit(){
    console.log('Input data: '+this.message());
    console.log(this.activatedRoute);
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => 
       this.userName= this.userService.users.find((u) => u.id === paramMap.get('userId'))?.name || ''
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}

export const resolveUsername : ResolveFn<string> =
  (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
    const usersService = inject(UsersService);
    const userName = usersService.users.find((u) => u.id === activatedRoute.paramMap.get('userId'))?.name || '';
    return userName;
  }

