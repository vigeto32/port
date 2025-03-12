import "./App.css";
import Menu from "./Menu/Menu";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Menu />,  // ✅ Added Menu as the default page
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
