import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Output() selectedUser = new EventEmitter();
  @Input({required: true}) isSelected!: boolean;

  // getRandomIndex() {
  //   return Math.floor(Math.random() * DUMMY_USERS.length);
  
  // }

  // getRandomUser() {
  //   var newUser = this.users[this.getRandomIndex()];
  //   while (newUser === this.selectedUser()) {
  //     newUser = this.users[this.getRandomIndex()];
  //   }
  //   return newUser;
  // }

  get avatarPath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectedUser.emit(this.user.id);
  }

}
