import "./App.css";
import { Home } from "./pages/Home";
import AddUser from "./pages/Adduser";
import EditUser from "./pages/Edituser";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

import { createBrowserRouter, RouterProvider } from "react-router";

const routePath = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/adduser",
        element: <AddUser />,
      },
      {
        path: "/edituser/:id",
        element: <EditUser />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routePath} />
     
    </>
  );
}

export default App;

//  http://localhost:5173