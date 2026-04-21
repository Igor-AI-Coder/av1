import { Component, inject, computed, signal } from '@angular/core';
import { TaskService } from './services/task';
import { TaskColumnComponent } from './components/task-column/task-column';
import { TaskModalComponent } from './components/task-modal/task-modal';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskColumnComponent, TaskModalComponent],
  templateUrl: './app.html'
})
export class AppComponent {
  private taskService = inject(TaskService);

  showModal = signal(false);
  taskToEdit = signal<Task | null>(null);

  todoTasks = computed(() =>
    this.taskService.tasks().filter(t => t.status === 'todo')
  );
  inProgressTasks = computed(() =>
    this.taskService.tasks().filter(t => t.status === 'inProgress')
  );
  doneTasks = computed(() =>
    this.taskService.tasks().filter(t => t.status === 'done')
  );

  openModal(): void {
    this.taskToEdit.set(null);
    this.showModal.set(true);
  }

  openEditModal(task: Task): void {
    this.taskToEdit.set(task);
    this.showModal.set(true);
  }

  closeModal(): void {
    this.showModal.set(false);
  }

  saveTask(task: Omit<Task, 'id'> | Task): void {
    if ('id' in task) {
      this.taskService.updateTask(task as Task);
    } else {
      this.taskService.addTask(task);
    }
    this.closeModal();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }
}