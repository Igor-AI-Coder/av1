import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  templateUrl: './task-card.html'
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() edit = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<number>();

  get priorityColor(): string {
    return {
      'Alta': 'bg-gray-400',
      'Média': 'bg-red-500',
      'Baixa': 'bg-yellow-400'
    }[this.task.priority] ?? 'bg-gray-400';
  }

  get priorityTextColor(): string {
    return {
      'Alta': 'text-blue-600',
      'Média': 'text-blue-600',
      'Baixa': 'text-blue-600'
    }[this.task.priority] ?? 'text-blue-600';
  }
}