export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: 'Alta' | 'Média' | 'Baixa';
  status: 'todo' | 'inProgress' | 'done';
}