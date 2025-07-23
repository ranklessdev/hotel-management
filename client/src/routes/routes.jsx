import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import Gallery from "../pages/Gallery";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../admin/Login";
import BookingForm from "../pages/BookingForm";

const routes = [
  { path: "/admin/login", element: <Login /> },
  { path: "/", element: <Home /> },
  { path: "/rooms", element: <Rooms /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/services", element: <Services /> },
  { path: "/contact", element: <Contact /> },
  { path: "/booking", element: <BookingForm /> },
];

export default routes;