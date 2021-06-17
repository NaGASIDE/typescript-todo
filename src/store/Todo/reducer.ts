import { TodoAction, TodoActionTypes, TodosState  } from '../../types/todo'

const initialState: TodosState = {
  todos: [],
  completed: [],
}

export const TodoReducer = (state = initialState, action: TodoAction): TodosState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return {todos:[], completed: []}
    case TodoActionTypes.ADD_TODO:
      return {todos:[], completed: []}
    case TodoActionTypes.DELETE_TODO:
      return {todos:[], completed: []}
    case TodoActionTypes.EDIT_TODO:
      return {todos:[], completed: []}
    default:
     return state
  }
}