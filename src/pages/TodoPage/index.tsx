import { useState } from 'react'
import { AddTodoForm } from '../../components/AddTodoForm'
import { TodoList } from '../../components/TodoList'
import * as S from './styles'

export function TodoPage() {
  const [todos, setTodos] = useState([])

  const handleAddTodo = (task: string) => {
    const newTodo = { id: Date.now().toString(), task }
    setTodos([...todos, newTodo])
  }

  const handleComplete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <S.TodoPage>
      <h1>Todo List</h1>
      <AddTodoForm onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onComplete={handleComplete}
        onRemove={handleComplete}
      />
    </S.TodoPage>
  )
}
