import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import Dashboard from "./pages/DashboardPage";
import MenuPelanggan from "./pages/MenuPelanggan";
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
      element: <Dashboard />,
    },
    {
      path: "/pelanggan",
      element: <MenuPelanggan />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myrouter} />
    </>
  );
};

export default App;
