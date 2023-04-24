import { Component } from '@angular/core';
import { UsersService } from './users/users.service';

interface User {
  id: number;
  name: string;
  password: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;
  password: string;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private usersService: UsersService,
  ){
    this.username = '';
    this.password = '';
  }
  title = 'Login-ui';

  register() {
    this.usersService.addUser(this.username, this.password).subscribe();
    this.username = '';
    this.password = '';
  }


}
