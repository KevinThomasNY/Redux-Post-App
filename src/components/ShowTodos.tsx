import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchTodos,
  selectAllTodos,
  selectTodosStatus,
} from "../features/todos/todosSlice";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ShowTodos = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectAllTodos);
  const status = useAppSelector(selectTodosStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTodos());
    }
  }, [dispatch, status]);

  const handleEdit = (id: number) => {
    navigate(`post/edit/${id}`);
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
          <CardContent sx={{ paddingBottom: "16px" }}>
            <Typography variant="h6">{todo.title}</Typography>
          </CardContent>
          <Box
            sx={{ position: "absolute", bottom: 0, right: 0, padding: "8px" }}
          >
            <IconButton
              onClick={() => console.log("delete")}
              aria-label="delete"
              size="small"
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              onClick={() => handleEdit(todo.id)}
              size="small"
              color="secondary"
              aria-label="edit"
            >
              <EditIcon />
            </IconButton>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default ShowTodos;
