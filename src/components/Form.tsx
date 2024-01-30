import { useState } from "react";
import {useAppDispatch} from '../app/hooks'
import {createPost} from '../features/posts/postsSlice'
import { Box, Button, TextField, Typography } from "@mui/material";

type FormData = {
  title: string;
  post: string;
};

const Form = () => {
  const [formData, setFormData] = useState<FormData>({ title: "", post: "" });
  const dispatch = useAppDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(createPost(formData))
    setFormData({ title: "", post: "" });
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
        name="post"
        value={formData.post}
        onChange={handleChange}
        variant="outlined"
        multiline
        rows={4}
        fullWidth
      />
      <Button
        color="secondary"
        type="submit"
        style={{ marginTop: "20px", alignSelf: "center" }}
        sx={{ width: "25%" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Form;
