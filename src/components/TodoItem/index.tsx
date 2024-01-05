import { Button } from '../Button'
import * as S from './styles'

type TodoItemProps = {
  task: string
  onComplete: () => void
  onRemove: () => void
}

export function TodoItem({ task, onComplete, onRemove }: TodoItemProps) {
  return (
    <S.TodoItem>
      <span>{task}</span>
      <Button onClick={onComplete}>Completar</Button>
      <Button onClick={onRemove}>Remover</Button>
    </S.TodoItem>
  )
}
