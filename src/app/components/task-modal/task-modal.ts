import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-modal.html'
})
export class TaskModalComponent implements OnInit {
  @Input() taskToEdit: Task | null = null;
  @Output() save = new EventEmitter<Omit<Task, 'id'> | Task>();
  @Output() close = new EventEmitter<void>();

  form: Omit<Task, 'id'> = {
    title: '',
    description: '',
    dueDate: '',
    priority: 'Média',
    status: 'todo'
  };

  ngOnInit(): void {
    if (this.taskToEdit) {
      const { id, ...rest } = this.taskToEdit;
      this.form = { ...rest };
    }
  }

  submit(): void {
    if (!this.form.title.trim()) return;
    if (this.taskToEdit) {
      this.save.emit({ ...this.form, id: this.taskToEdit.id });
    } else {
      this.save.emit(this.form);
    }
  }
}