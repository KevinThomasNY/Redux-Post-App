import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { deletePost } from "../features/posts/postsSlice";
import { Box, IconButton, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ShowPosts = () => {
  const navigate = useNavigate();
  const postsObject = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  const postsArray = postsObject.posts;

  const handleEdit = (id: number) => {
    navigate(`/edit/${id}`)
  };

  if (postsArray.length === 0) {
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
            No Posts Available
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
      {postsArray.map((post) => (
        <Card
          key={post.id}
          sx={{
            width: "50%",
            maxWidth: "700px",
            marginBottom: 2,
            position: "relative",
          }}
        >
          <CardContent sx={{ paddingBottom: "16px" }}>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="body2">{post.content}</Typography>
          </CardContent>
          <Box
            sx={{ position: "absolute", bottom: 0, right: 0, padding: "8px" }}
          >
            <IconButton
              onClick={() => dispatch(deletePost(post.id))}
              aria-label="delete"
              size="small"
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              onClick={() => handleEdit(post.id)}
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

export default ShowPosts;
