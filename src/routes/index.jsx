import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home";
import Match from "../pages/match/Match";
import Message from "../pages/messages/Message";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/match/:userId",
        element: <Match />,
      },
      {
        path: "/messages/:userId",
        element: <Message />,
      },
      {
        path: "/profile/:userId",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
