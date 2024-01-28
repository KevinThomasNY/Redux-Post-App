import { useAppSelector } from "../app/hooks";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const ShowPosts = () => {
  const postsObject = useAppSelector((state) => state.posts);
  const postsArray = postsObject.posts;

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
          sx={{ width: "50%", maxWidth: "700px", marginBottom: 2 }}
        >
          <CardContent>
            <Typography variant="h5">
              {post.title}
            </Typography>
            <Typography variant="body2">
              {post.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ShowPosts;
