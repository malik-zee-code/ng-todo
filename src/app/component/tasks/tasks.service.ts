import { Injectable } from '@angular/core';
import { Task } from '../../lib/types/type';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  createTask(
    task: { title: string; summary: string; dueDate: string },
    userId: string
  ) {
    const id = `t${this.tasks.length + 1}`;

    const newTask: Task = { id, userId, ...task };
    this.tasks.push(newTask);

    this.saveTask();
  }

  completeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTask();
  }

  saveTask() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
