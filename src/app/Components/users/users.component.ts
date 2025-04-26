import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersService } from '../../Services/users.service';
import { Route, Router, RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-users',
  imports: [RouterModule, UserComponent],
  providers: [UsersService],
  templateUrl: './users.component.html',
  styles: ``,
})
export class UsersComponent {
  AllUsers: any = [];
  constructor(public userService: UsersService, private router: Router) {}
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.AllUsers = data;
      },
      error: (err) => {
        console.log(err.message);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
  onDelete(userId: string) {
    console.log(userId);

    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          this.AllUsers = this.AllUsers.filter(
            (user: any) => userId !== user.id
          );
        },
        error: (err) => {
          this.loadUsers();
        },
      });
    }
  }
  OnUpdate(UserData: any) {
    this.userService.updateUser(UserData.id, { ...UserData }).subscribe({
      next: () => {
        console.log('User Updated successfully');
        this.loadUsers();
        this.reloadComponent();
      },
    });
  }
  reloadComponent() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['users']);
    });
  }
}
