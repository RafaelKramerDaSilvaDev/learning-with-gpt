import { FormEvent, useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'
import * as S from './styles'

type AddTodoFormProps = {
  onAdd: (task: string) => void
}

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [task, setTask] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onAdd(task)
    setTask('')
  }

  return (
    <S.AddTodoForm onSubmit={handleSubmit}>
      <Input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Digite a nova tarefa"
      />
      <Button type="submit">Adicionar Tarefa</Button>
    </S.AddTodoForm>
  )
}
