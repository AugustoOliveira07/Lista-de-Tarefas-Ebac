import { useRecoilState } from 'recoil'
import { todoState } from '../atoms/todoAtom'

function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todoState)

  const toggleTodo = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id
          ? { ...item, completed: !item.completed }
          : item
      )
    )
  }

  const deleteTodo = () => {
    setTodos(todos.filter((item) => item.id !== todo.id))
  }

  return (
    <li className="todo-item">
      <span
        className={`todo-text ${todo.completed ? 'completed' : ''}`}
        onClick={toggleTodo}
      >
        {todo.text}
      </span>

      <button
        className="delete-button"
        onClick={deleteTodo}
      >
        Excluir
      </button>
    </li>
  )
}

export default TodoItem