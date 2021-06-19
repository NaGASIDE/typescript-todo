export interface ITodo {
  id: number;
  title: string;
  status: string;
  completed: boolean;  
}

export interface ITodoState {
  todos: ITodo[];
  loading: boolean;
  error: null | string;
  value: number;
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