# Gerenciador de Tarefas - Estudos

Aplicação web desenvolvida em Angular como parte da disciplina de Programação Web 1.

O projeto consiste em um gerenciador de tarefas com 3 colunas (Para fazer, Em andamento e Concluídas), construído com Angular, Tailwind CSS e Signals.

## Tecnologias utilizadas

- Angular 21
- Tailwind CSS
- TypeScript
- Signals (gerenciamento de estado)

## Como rodar o projeto

### Pré-requisitos

- Node.js instalado
- Angular CLI instalado globalmente (`npm install -g @angular/cli`)

### Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Igor-AI-Coder/av1.git
cd av1
npm install
```

### Servidor de desenvolvimento

Para iniciar o servidor local, rode:

```bash
ng serve
```

Acesse no navegador: `http://localhost:4200/`

A aplicação recarrega automaticamente ao salvar qualquer arquivo.

## Estrutura do projeto
src/
└── app/
├── components/
│   ├── task-card/       # Card individual de tarefa
│   ├── task-column/     # Coluna do quadro (Para fazer, Em andamento, Concluídas)
│   └── task-modal/      # Modal de criação e edição de tarefas
├── models/
│   └── task.model.ts    # Interface Task
├── services/
│   └── task.ts          # Serviço com os dados e lógica das tarefas
├── app.component.ts
└── app.component.html
## Funcionalidades

- Visualizar tarefas organizadas em 3 colunas
- Adicionar nova tarefa com título, descrição, data de término, prioridade e status
- Editar tarefas existentes
- Excluir tarefas

## Build

Para gerar a versão de produção:

```bash
ng build
```

Os arquivos gerados ficam na pasta `dist/`.
