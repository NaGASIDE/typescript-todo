import { TodoAction, TodoActionTypes, TodosState  } from '../../types/todo'

const initialState: TodosState = {
  todos: [],
  completed: [],
  error: null
}

export const TodoReducer = (state = initialState, action: TodoAction): TodosState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return {todos:[], completed: [], error: null}
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return {todos:[], completed: [], error: action.payload}
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return {todos:[], completed: [], error: null}
    case TodoActionTypes.ADD_TODO:
      return {todos:[], completed: [], error: null}
    case TodoActionTypes.DELETE_TODO:
      return {todos:[], completed: [], error: null}
    case TodoActionTypes.EDIT_TODO:
      return {todos:[], completed: [], error: null}
    default:
     return state
  }
}