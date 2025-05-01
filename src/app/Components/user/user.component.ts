import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsersService } from '../../Services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styles: ``,
})
export class UserComponent {
  @Input() User: any;
  @Output() deleteUser = new EventEmitter<any>();
  @Output() editUser = new EventEmitter<any>();
  MyFormData = new FormGroup({
    name: new FormControl('', Validators.minLength(5)),
    username: new FormControl('', [
      Validators.minLength(4),
      Validators.maxLength(15),
    ]),
    email: new FormControl('', [
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
  });

  constructor() {}
  delete() {
    this.deleteUser.emit(this.User.id);
  }
  edit() {
    if (this.MyFormData.valid) {
      console.log(this.User.id);
      const UpdatedUser = { id: this.User.id, ...this.MyFormData.value };
      this.editUser.emit(UpdatedUser);
    }
  }
}
