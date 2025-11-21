import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS; 
  selectedUserId! :string;
  get selectedUser()
  {
    return this.users.find((user) => user.id == this.selectedUserId)!;
  }
  // userName = "";
  // t=0;
  // onSelectUser(id:string){
  //   this.t = this.users.findIndex(i => i.id==id);
  //   this.userName = this.users[this.t].name;
  // }
  onSelectUser(id:string){
    this.selectedUserId = id;
  }
}
