import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { editPost } from "../features/posts/postsSlice";
import { Box, Button, TextField, Typography } from "@mui/material";
interface Props {
  id: number;
  title: string | null;
  content: string | null;
}

type FormData = {
  id: number;
  title: string;
  content: string;
};

const Edit = ({ id, title, content }: Props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    id: id,
    title: title || "",
    content: content || "",
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    setFormData({
      id: id,
      title: title || "",
      content: content || "",
    });
  }, [id, title, content]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(editPost(formData));
    setFormData({ id: 0, title: "", content: "" });
    navigate("/");
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
        style={{ marginTop: "20px", alignSelf: "center" }}
        sx={{ width: "25%" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Edit;
