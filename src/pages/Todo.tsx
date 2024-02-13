import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { fetchTodos } from "../features/todos/todosSlice"
import { selectAllTodos } from "../features/todos/todosSlice"

const Todo = () => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(selectAllTodos)
  console.log(todos)
  useEffect(() => {
    dispatch(fetchTodos())
  },[dispatch])
  return (
    <div>Todo Page</div>
  )
}

export default Todo