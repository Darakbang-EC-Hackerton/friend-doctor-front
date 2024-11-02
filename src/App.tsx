import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import Calendar from "./routes/calendar";
import Settings from "./routes/settings";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/Calendar", element: <Calendar /> },
    { path: "/Settings", element: <Settings /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
