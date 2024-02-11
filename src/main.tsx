import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Layout from "./Layout.tsx";
import About from "./pages/About.tsx";
import Edit from "./pages/Edit.tsx"
import ErrorPage from "./pages/ErrorPage.tsx";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from './ThemeContext.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use Layout as the parent route
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> }, // Home route
      { path: 'todo', element: <About /> }, // About route
      {path: 'post/edit/:id', element: <Edit />}
    ],
  },
  // ... potentially other top-level routes
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
