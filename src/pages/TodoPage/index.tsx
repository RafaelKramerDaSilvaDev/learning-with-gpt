import { useState } from 'react'
import { AddTodoForm } from '../../components/AddTodoForm'
import { TodoList } from '../../components/TodoList'
import * as TodoService from './../../services/TodoService'
import * as S from './styles'
import { Todo } from '../../models/TodoModel'

export function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddTodo = (task: string) => {
    const updatedTodos = TodoService.addTodo(task)
    setTodos(updatedTodos)
  }

  const handleRemoveTodo = (id: string) => {
    const updatedTodos = TodoService.removeTodo(id)
    setTodos(updatedTodos)
  }

  return (
    <S.TodoPage>
      <h1>Lista de Tarefas</h1>
      <AddTodoForm onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onComplete={() => ''}
        onRemove={handleRemoveTodo}
      />
    </S.TodoPage>
  )
}
