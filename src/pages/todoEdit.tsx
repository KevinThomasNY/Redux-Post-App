import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { getSingleTodo } from "../features/todos/todosSlice";
import TodoEditForm from "../components/TodoEditForm";
type RouteParams = {
  id: string;
};

const TodoEdit = () => {
  const { id } = useParams<RouteParams>();
  const idAsNumber = parseInt(id || "0");
  console.log(idAsNumber)
  const dispatch = useAppDispatch();
  const selectedTodo = useAppSelector((state) => state.todos.selectedTodo);
  const title = selectedTodo?.title || "";
  const userId = selectedTodo?.userId || 0;
  const completed = selectedTodo?.completed || false;

  useEffect(() => {
    dispatch(getSingleTodo(idAsNumber));
  }, [dispatch, idAsNumber]);

  return (
    <>
      <TodoEditForm title={title} id={idAsNumber} userId={userId} completed={completed} />
    </>
  );
};

export default TodoEdit;
