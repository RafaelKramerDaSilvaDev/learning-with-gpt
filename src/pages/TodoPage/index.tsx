import { useState } from 'react'
import { AddTodoForm } from '../../components/AddTodoForm'
import { TodoList } from '../../components/TodoList'
import { Todo } from '../../models/TodoModel'
import * as S from './styles'

export function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (task: string) => {
    const newTodo = { id: Date.now().toString(), task }
    setTodos([...todos, newTodo])
  }

  const handleComplete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <S.TodoPage>
      <h1>Lista de Tarefas</h1>
      <AddTodoForm onAdd={handleAdd} />
      <TodoList
        todos={todos}
        onComplete={handleComplete}
        onRemove={handleComplete}
      />
    </S.TodoPage>
  )
}
