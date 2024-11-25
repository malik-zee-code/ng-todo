import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../../lib/constant/dummy-user';
import { User } from '../../lib/types/type';

// let random = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  // selectedUser = signal(DUMMY_USERS[random]);
  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }
  // imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  onSelectUser() {
    this.select.emit(this.user.id);
    // let random = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[random]);
  }
}
