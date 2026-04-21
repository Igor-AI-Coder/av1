import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskCardComponent } from '../task-card/task-card';

@Component({
  selector: 'app-task-column',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './task-column.html'
})
export class TaskColumnComponent {
  @Input() title!: string;
  @Input() tasks!: Task[];
  @Output() editTask = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<number>();
}