import { ReactNode } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import { Box } from "@mui/material";

type LayoutProps = {
  children?: ReactNode; // children is optional
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {
        children ? (
          <>{children}</>
        ) : (
          <Box sx={{ pt: 10 }}>
            <Outlet />
          </Box>
        )
      }
    </>
  );
};

export default Layout;
