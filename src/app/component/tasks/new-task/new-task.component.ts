import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../../../lib/types/type';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter<{
    title: string;
    summary: string;
    dueDate: string;
  }>();

  title = '';
  summary = '';
  dueDate = '';

  private taskService = inject(TaskService);

  onClose() {
    this.cancel.emit(false);
  }

  onCreateTask() {
    this.taskService.createTask(
      {
        title: this.title,
        summary: this.summary,
        dueDate: this.dueDate,
      },
      this.userId
    );

    this.onClose();
  }
}
