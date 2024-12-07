import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../lib/types/type';
import { CardComponent } from '../../shared/card/card.component';

// let random = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input() selected!: boolean;
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
