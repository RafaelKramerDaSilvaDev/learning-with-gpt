import { TodoItem } from '../../components/TodoItem'
import * as S from './styles'

export function Main() {
  return (
    <S.Main>
      <TodoItem task="Tarefa 1" />
      <TodoItem task="Tarefa 2" />
      <TodoItem task="Tarefa 3" />
      <TodoItem task="Tarefa 4" />
    </S.Main>
  )
}
