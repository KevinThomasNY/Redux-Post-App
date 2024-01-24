import { Link } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
const ErrorPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Typography variant="h1" component="h1">
        404
      </Typography>
      <Typography variant="body1">
        The page you are looking for doesn't exist.
      </Typography>
      <br />
      <Button component={Link} to="/">
        Go back home
      </Button>
    </Box>
  );
};

export default ErrorPage;
