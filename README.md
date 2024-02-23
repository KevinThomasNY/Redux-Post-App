# Redux Post/Todo App

## Overview

This React application demonstrates the effective use of Redux Toolkit for state management, incorporating CRUD functionality for both posts and todos. It seamlessly integrates Material-UI for a polished user interface and utilizes the Context API to provide a customizable light/dark mode experience.

## Key Features

* **Post Management:**
    * Create, read, update, and delete posts.
    * Hardcoded initial post data for demonstration purposes.

* **Todo Management:**
    * **Fetching Todos:** The application uses `createAsyncThunk` to asynchronously fetch todos from [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos). The todos slice handles the async states to update the UI accordingly.
    * Add, delete, and mark todos as complete.

* **Theme Customization:**
    * Switch between light and dark modes using the Context API.

* **Responsive Design:**
    * Material-UI components ensure a user-friendly experience across devices.

## Technologies Used

- **[React](https://reactjs.org/):** Core frontend library.
- **[Redux Toolkit](https://redux-toolkit.js.org/):** Streamlines Redux setup and simplifies global state management.
- **[Material-UI (MUI)](https://mui.com/):** Versatile React component library for building attractive UIs.
- **[JSONPlaceholder](https://jsonplaceholder.typicode.com/):** Provides sample data for todo demonstration.