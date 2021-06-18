import { TodoAction, TodoActionTypes, TodosState  } from '../../types/todo'

const initialState: TodosState = {
  todos: [],
  completed: [],
  error: null
}

export const TodoReducer = (state = initialState, action: TodoAction): TodosState => {
 let newTodos = []
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      newTodos = [...state.todos]
      return {todos:newTodos, completed: [], error: null}
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return {todos:[], completed: [], error: action.payload}
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return {todos: action.payload, completed: [], error: null}
    case TodoActionTypes.ADD_TODO:
      newTodos = [...state.todos]
      newTodos.push(action.payload)
      return {todos: newTodos, completed: [], error: null} 
    case TodoActionTypes.DELETE_TODO:
      newTodos = [...state.todos]
      newTodos = newTodos.filter(todo => todo.id !== action.payload)
      return {todos:newTodos, completed: [], error: null}
    case TodoActionTypes.DONE_TODO:
      newTodos = [...state.todos]
      newTodos[action.payload].completed = !newTodos[action.payload].completed
      return {todos: newTodos, completed: [], error: null}
    case TodoActionTypes.EDIT_TODO:
      return {todos:[], completed: [], error: null}
    default:
     return state
  }
}