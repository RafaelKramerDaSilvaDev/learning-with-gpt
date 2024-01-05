import { TodoItem } from '../TodoItem'
import * as S from './styles'

type TodoListProps = {
  todos: { id: string; task: string }[]
  onComplete: (id: string) => void
  onRemove: (id: string) => void
}

export function TodoList({ todos, onComplete, onRemove }: TodoListProps) {
  return (
    <S.TodoList>
      {todos.map(({ id, task }) => (
        <TodoItem
          key={id}
          task={task}
          onComplete={() => onComplete(id)}
          onRemove={() => onRemove(id)}
        />
      ))}
    </S.TodoList>
  )
}
