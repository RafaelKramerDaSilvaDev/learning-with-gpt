import { Todo } from '../models/TodoModel'

const TODO_STORAGE_KEY = 'todos'

export function saveTodos(todos: Todo[]) {
  localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos))
}

export function loadtodos(): Todo[] {
  const storedTodos = localStorage.getItem(TODO_STORAGE_KEY)
  return storedTodos ? JSON.parse(storedTodos) : []
}
