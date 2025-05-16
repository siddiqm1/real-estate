import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import HomePage from "./routes/HomePage";
import ListPage from "./routes/ListPage";
import Register from "./routes/Register";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SinglePage from "./routes/SinglePage";
import Login from "./routes/Login";

function App() {

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
      ]
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
