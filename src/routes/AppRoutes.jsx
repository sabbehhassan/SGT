import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home";
import About from "../components/about";
import Services from "../pages/Services";
import Contact from "../pages/ContactUs";
import Progress from "../components/progress";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> }, // ✅ HomePage me Hero + About dono honge
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "Contact", element: <Contact /> },
      { path: "Progress", element: <Progress /> },
    ],
  },
]);

export default AppRoutes;
