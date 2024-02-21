import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { editTodo } from "../features/todos/todosSlice";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Todo } from "../features/todos/todosSlice";

const TodoEditForm = ({ id, title, userId, completed }: Todo) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Todo>({
    id: id,
    title: title || "",
    userId: userId || 1,
    completed: completed || false,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    setFormData({
      id: id,
      title: title || "",
      userId: userId || 1,
      completed: completed || false,
    });
  }, [id, title, userId, completed]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(editTodo(formData));
    setFormData({ id: 0, title: "", userId: 1, completed: false});
    navigate("/todo");
  };

  const handleCancel = () => {
    navigate("/todo");
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="50%"
      maxWidth={"700px"}
      bgcolor="background.paper"
      padding={2}
      marginX="auto"
    >
      <Typography variant="h6" align="left">
        Title
      </Typography>
      <TextField
        name="title"
        value={formData.title}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Box display="flex" justifyContent="center" gap={4}>
        <Button color="primary" onClick={handleCancel} sx={{ mt: 2, px: 4, pt: 1}}>
          Cancel
        </Button>
        <Button color="secondary" type="submit" sx={{ mt: 2, px: 4, py: 1 }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default TodoEditForm;
