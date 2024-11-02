import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import Calendar from "./routes/calendar";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/calendar",
      element: <Calendar />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
