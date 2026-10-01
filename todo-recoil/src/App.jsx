import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'

function App() {
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>

      <TodoForm />

      <TodoFilter />

      <TodoList />
    </div>
  )
}

export default App