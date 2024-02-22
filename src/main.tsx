import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Layout from "./Layout.tsx";
import Todo from "./pages/Todo.tsx";
import PostEdit from "./pages/postEdit.tsx";
import TodoEdit from "./pages/todoEdit.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout as the parent route
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> }, // Post route
      { path: "post/edit/:id", element: <PostEdit /> },
      { path: "todo", element: <Todo /> }, // Todo route
      { path: "todo/edit/:id", element: <TodoEdit /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
);
