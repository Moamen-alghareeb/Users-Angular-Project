import { Component } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  providers: [UsersService],
  templateUrl: './user-details.component.html',
  styles: ``,
})
export class UserDetailsComponent {
  ID = 0;
  UserDetails: any;
  constructor(private services: UsersService, activatedRoute: ActivatedRoute) {
    this.ID = activatedRoute.snapshot.params['id'];
  }
  ngOnInit() {
    // this.services.getUsersById(this.ID);
    this.services.getUsersById(this.ID).subscribe({
      next: (data) => {
        console.log(data);
        this.UserDetails = data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
}
