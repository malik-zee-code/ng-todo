import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../../../lib/types/type';
import { CardComponent } from '../../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: Task;

  private taskService = inject(TaskService);
  onCompleteTask() {
    this.taskService.completeTask(this.task.id);
  }
}
