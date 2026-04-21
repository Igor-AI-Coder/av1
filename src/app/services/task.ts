import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private nextId = 4;

  tasks = signal<Task[]>([
    {
      id: 1,
      title: 'Ler capítulo 3 de Algoritmos',
      description: 'Priorizar exercícios 3.1-3.5',
      dueDate: '2026-04-17',
      priority: 'Alta',
      status: 'todo'
    },
    {
      id: 2,
      title: 'Resolver lista de TS',
      description: 'Atenção a generics',
      dueDate: '2026-04-20',
      priority: 'Média',
      status: 'inProgress'
    },
    {
      id: 3,
      title: 'Revisão rápida: HTML/CSS',
      description: '30 minutos',
      dueDate: '2026-04-25',
      priority: 'Baixa',
      status: 'done'
    }
  ]);

  addTask(task: Omit<Task, 'id'>): void {
    this.tasks.update(current => [
      ...current,
      { ...task, id: this.nextId++ }
    ]);
  }

  updateTask(updated: Task): void {
    this.tasks.update(current =>
      current.map(t => t.id === updated.id ? updated : t)
    );
  }

  deleteTask(id: number): void {
    this.tasks.update(current => current.filter(t => t.id !== id));
  }
}