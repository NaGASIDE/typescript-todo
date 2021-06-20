import { TodoSlice, initialState } from './todoSlice'

const state =  {
  todos: [{id: 0, title: `Первая задача!`, status: `hold`, completed: false}],
  asyncTodos: [],
  loading: false,
  error: null,
  filter: 'all'
}

const stateAsyncTodos =  {
  todos: [],
  asyncTodos: [{
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
    }],
  loading: false,
  error: null,
  filter: 'all'
}

  it("Todo should be add", function () {
    const action = {
      type: TodoSlice.actions.addTodo,
      payload: "Первая задача!",
    };

    expect(TodoSlice.reducer(initialState, action)).toEqual({
      ...initialState,
      todos: [{id: 0, title: `Первая задача!`, status: `hold`, completed: false}],
    });
  });




  it("Todo should be remove", function () {
    
    const action = {
      type: TodoSlice.actions.removeTodo,
      payload: 0,
    };

    expect(TodoSlice.reducer(state, action)).toEqual({
      ...initialState,
    });
  });




  it("Todo title should be change", function () {
    
    const action = {
      type: TodoSlice.actions.setTodo,
      payload: {id: 0, title: `Тудушка изменина успешно `},
    };

    expect(TodoSlice.reducer(state, action)).toEqual({
      ...initialState,
      todos: [{id: 0, title: `Тудушка изменина успешно `, status: `hold`, completed: false}],
    });
  });




  it("Todo status will be change", function () {
    
    const action = {
      type: TodoSlice.actions.setTodoStatus,
      payload: {id: 0, status: `open`},
    };

    expect(TodoSlice.reducer(state, action)).toEqual({
      ...initialState,
      todos: [{id: 0, title: `Первая задача!`, status: `open`, completed: false}],
    });
  });




  it("Todo completed will be true", function () {
    
    const action = {
      type: TodoSlice.actions.setTodoDone,
      payload: {id: 0, completed: false},
    };

    expect(TodoSlice.reducer(state, action)).toEqual({
      ...initialState,
      todos: [{id: 0, title: `Первая задача!`, status: `hold`, completed: true}],
    });
  });




  it("state gonna return back", function () {
    
    const action = {
      type: TodoSlice.actions.fetchTodos,
    };

    expect(TodoSlice.reducer(initialState, action)).toEqual({
      ...initialState,
    });
  });




  it("error message", function () {
    
    const action = {
      type: TodoSlice.actions.fetchTodosError,
      payload: `При загрузке задач с сервера произошла ошибка`
    };

    expect(TodoSlice.reducer(initialState, action)).toEqual({
      ...initialState,
      error: `При загрузке задач с сервера произошла ошибка`
    });
  });




  it("async Todos gonna pushed", function () {
    
    const action = {
      type: TodoSlice.actions.fetchTodosSuccess,
      payload: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false
        },
      ]
    };

    expect(TodoSlice.reducer(initialState, action)).toEqual({
      ...initialState,
      asyncTodos: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false
        },
      ]
    });
  });




  it("remove async todo", function () {
    
    const action = {
      type: TodoSlice.actions.removeAsyncTodo,
      payload: 1
    };

    expect(TodoSlice.reducer(initialState, action)).toEqual({
      ...initialState,
    });
  });





  it("async todo title will be change", function () {
    
    const action = {
      type: TodoSlice.actions.setAsyncTodo,
      payload: { id: 0, title: `Задача успешно изменина!` }
    };

    expect(TodoSlice.reducer(stateAsyncTodos, action)).toEqual({
      ...initialState,
      asyncTodos: [{
        userId: 1,
        id: 1,
        title: `Задача успешно изменина!`,
        completed: false
        }]
    });
  });




  it("async todo completed will be true", function () {
    
    const action = {
      type: TodoSlice.actions.setAsyncTodoDone,
      payload: { id: 0, completed: false }
    };

    expect(TodoSlice.reducer(stateAsyncTodos, action)).toEqual({
      ...initialState,
      asyncTodos: [{
        userId: 1,
        id: 1,
        title: `delectus aut autem`,
        completed: true
        }]
    });
  });




  it("todo filter gonna change", function () {
    
    const action = {
      type: TodoSlice.actions.setFilter,
      payload: `open`
    };

    expect(TodoSlice.reducer(initialState, action)).toEqual({
      ...initialState,
      filter: `open`
    });
  });