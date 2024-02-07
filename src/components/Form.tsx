import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { createPost } from "../features/posts/postsSlice";
import { Box, Button, TextField, Tooltip, Typography } from "@mui/material";

type FormData = {
  id: number;
  title: string;
  content: string;
};

const Form = () => {
  const postsObject = useAppSelector((state) => state.posts);
  const postsArray = postsObject.posts;
  const length = postsArray.length + 1;
  const [formData, setFormData] = useState<FormData>({
    id: length,
    title: "",
    content: "",
  });
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(createPost(formData));
    setFormData({ id: 0, title: "", content: "" });
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
      <Typography variant="h6" align="left">
        Post
      </Typography>
      <TextField
        name="content"
        value={formData.content}
        onChange={handleChange}
        variant="outlined"
        multiline
        rows={4}
        fullWidth
      />
      <Button
        color="secondary"
        type="submit"
        disabled={!formData.title || !formData.content}
        style={{ marginTop: "20px", alignSelf: "center" }}
        sx={{ width: "25%" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Form;
