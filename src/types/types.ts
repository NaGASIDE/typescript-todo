export interface ITodo {
  id: number;
  title: string;
  status: string;
  completed: boolean;  
}

export interface IAsyncTodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodoState {
  todos: ITodo[];
  asyncTodos: IAsyncTodo[];
  loading: boolean;
  error: null | string;
  filter: string;
}

export interface IAddTodo {
  title: string;
  status: string;
}

export interface ISetTodo {
  id: number;
  title: string;
}

export interface ISetTodoStatus {
  id: number;
  status: string;
}

export interface ISetTodoDone { 
  id: number;
  completed: boolean
}