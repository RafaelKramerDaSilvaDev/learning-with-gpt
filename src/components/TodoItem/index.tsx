import * as S from './styles'

type TodoItemProps = {
  task: string
  onComplete: () => void
  onRemove: () => void
}

export function TodoItem({ task, onComplete, onRemove }: TodoItemProps) {
  return (
    <S.TodoItem>
      <S.Span>{task}</S.Span>
      <S.Button onClick={onComplete}>Completar</S.Button>
      <S.Button onClick={onRemove}>Remover</S.Button>
    </S.TodoItem>
  )
}
