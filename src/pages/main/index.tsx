import { TodoList } from '../../components/TodoList'
import * as S from './styles'

export function Main() {
  return (
    <S.Main>
      <TodoList
        todos={[
          { id: '1', task: 'Um' },
          { id: '2', task: 'Dois' },
          { id: '3', task: 'Três' },
          { id: '4', task: 'Quatro' },
        ]}
      />
    </S.Main>
  )
}
