import { useRecoilValue } from 'recoil'
import { filteredTodosSelector } from '../selectors/filteredTodosSelector'
import TodoItem from './TodoItem'

function TodoList() {
  const todos = useRecoilValue(filteredTodosSelector)

  return (
    <div>
      {todos.length === 0 ? (
        <p className="empty-message">
          Nenhuma tarefa encontrada.
        </p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoList