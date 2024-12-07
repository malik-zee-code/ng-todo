import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../../lib/constant/dummy-user';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() userId!: string;

  constructor(private tasksService: TaskService) {}

  toggleNew = false;

  get userName() {
    return DUMMY_USERS.find((user) => user.id === this.userId)?.name;
  }

  get userTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  toggleForm(tog: boolean) {
    this.toggleNew = tog;
  }

  createTask(task: { title: string; summary: string; dueDate: string }) {
    this.tasksService.createTask(task, this.userId);
    this.toggleForm(false);
  }
}
