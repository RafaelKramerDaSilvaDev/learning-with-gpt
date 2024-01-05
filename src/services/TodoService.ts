import { Todo } from '../models/TodoModel'
import * as TodoRepository from '../repositories/TodoRepository'

export function addTodo(task: string): Todo[] {
  const newTodo: Todo = { id: Date.now().toString(), task }
  const todos = [...TodoRepository.loadTodos(), newTodo]
  TodoRepository.saveTodos(todos)
  return todos
}

export function removeTodo(id: string): Todo[] {
  const todos = TodoRepository.loadTodos().filter((todo) => todo.id !== id)
  TodoRepository.saveTodos(todos)
  return todos
}
