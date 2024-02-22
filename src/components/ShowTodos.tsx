import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchTodos,
  selectAllTodos,
  selectTodosStatus,
  deleteTodo,
} from "../features/todos/todosSlice";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

const ShowTodos = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectAllTodos);
  const status = useAppSelector(selectTodosStatus);

  useEffect(() => {
    if (status === "idle" && todos.length === 0) {
      dispatch(fetchTodos());
    }
  }, [dispatch, status, todos]);

  const handleEdit = (id: number) => {
    navigate(`edit/${id}`);
  };

  if (todos.length === 0) {
    return (
      <Card
        sx={{
          margin: "auto",
          width: "50%",
          maxWidth: "700px",
          marginBottom: 2,
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            No Todos Available
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Box
      sx={{
        marginTop: "25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {todos.map((todo) => (
        <Card
          key={todo.id}
          sx={{
            width: "50%",
            maxWidth: "700px",
            marginBottom: 2,
            position: "relative",
          }}
        >
          <CardContent sx={{ marginBottom: "24px", wordBreak: "break-word" }}>
            <Typography variant="h6">{todo.title}</Typography>
          </CardContent>
          <Box
            sx={{ position: "absolute", bottom: 0, right: 0, padding: "8px" }}
          >
            <IconButton
              onClick={() => dispatch(deleteTodo(todo.id))}
              aria-label="complete"
              size="medium"
            >
              <CheckIcon color="primary" />
            </IconButton>
            <IconButton
              onClick={() => dispatch(deleteTodo(todo.id))}
              aria-label="delete"
              size="small"
            >
              <DeleteIcon color="error" />
            </IconButton>
            <IconButton
              onClick={() => handleEdit(todo.id!)}
              size="small"
              aria-label="edit"
            >
              <EditIcon color="secondary" />
            </IconButton>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default ShowTodos;
