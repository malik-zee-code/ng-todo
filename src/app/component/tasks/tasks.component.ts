import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../../lib/constant/dummy-user';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() id!: string;

  get userName() {
    return DUMMY_USERS.find((user) => user.id === this.id)?.name;
  }
}
