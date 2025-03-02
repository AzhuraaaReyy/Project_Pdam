import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import DashboardPage from "./pages/dashboard";
const App = () => {
  const myrouter = createBrowserRouter([
    {
      path: "/",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/home",
      element: <DashboardPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myrouter} />
    </>
  );
};

export default App;
