import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
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
