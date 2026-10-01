import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todoState } from '../atoms/todoAtom'

function TodoForm() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useRecoilState(todoState)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text.trim()) return

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    }

    setTodos([...todos, newTodo])
    setText('')
  }

  return (
  <form className="todo-form" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Digite uma tarefa..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />

    <button type="submit">
      Adicionar
    </button>
  </form>
)
}

export default TodoForm