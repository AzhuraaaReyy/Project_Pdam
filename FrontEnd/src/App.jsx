import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
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
  ]);

  return (
    <>
      <RouterProvider router={myrouter} />
    </>
  );
};

export default App;
