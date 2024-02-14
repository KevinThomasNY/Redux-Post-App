import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchTodos, selectAllTodos } from "../features/todos/todosSlice";

const ShowTodos = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectAllTodos);
  console.log(todos);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return <div>ShowTodos</div>;
};

export default ShowTodos;
