export enum TodoActionTypes {
  FETCH_TODOS = `TODO.FETCH_TODOS`,
  ADD_TODO = `TODO.ADD_TODO`,
  DELETE_TODO = 'TODO.DELETE_TODO',
  EDIT_TODO = `TODO.EDIT_TODO`,
}

export interface TodosState {
  todos: any[],
  completed: any[]
}

interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS,
}

interface AddTodoAction {
  type: TodoActionTypes.ADD_TODO,
  payload: string
}

interface DeleteTodoAction {
  type: TodoActionTypes.DELETE_TODO,
  payload: number
}

interface EditTodoAction {
  type: TodoActionTypes.EDIT_TODO
  payload: number
}

export type TodoAction = FetchTodoAction | AddTodoAction | DeleteTodoAction | EditTodoAction 