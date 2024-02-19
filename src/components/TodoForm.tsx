import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { selectAllTodos, addTodo } from "../features/todos/todosSlice";
import { Box, Button, TextField, Typography } from "@mui/material";

type FormData = {
  id: number
  userId: number;
  title: string;
  completed: boolean;
};

const TodoForm = () => {
  const todos = useAppSelector(selectAllTodos);
  const [initalId, setInitalId] = useState<number>(todos.length + 1);
  const [formData, setFormData] = useState<FormData>({
    id: initalId,
    userId: 1,
    title: "",
    completed: false,
  });
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      title: event.target.value 
    }));
  };  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo(formData));
    setFormData({ ...formData, title: "", });
    setInitalId(initalId + 1);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="50%"
      maxWidth={"700px"}
      bgcolor="background.paper"
      padding={2}
      marginX="auto"
    >
      <Typography variant="h6" align="left">
        Todo Title
      </Typography>
      <TextField
        name="title"
        value={formData.title}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button
        color="secondary"
        type="submit"
        disabled={!formData.title}
        style={{ marginTop: "20px", alignSelf: "center" }}
        sx={{ width: "25%" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default TodoForm;
