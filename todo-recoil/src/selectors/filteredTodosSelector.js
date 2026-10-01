import { selector } from 'recoil'
import { todoState } from '../atoms/todoAtom'
import { filterState } from '../atoms/filterAtom'

export const filteredTodosSelector = selector({
  key: 'filteredTodosSelector',

  get: ({ get }) => {
    const todos = get(todoState)
    const filter = get(filterState)

    if (filter === 'completed') {
      return todos.filter(todo => todo.completed)
    }

    if (filter === 'pending') {
      return todos.filter(todo => !todo.completed)
    }

    return todos
  }
})