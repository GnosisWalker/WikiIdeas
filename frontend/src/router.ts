import {createBrowserRouter} from "react-router-dom";
import Layout from "./views/Layout.tsx";
import Home from "./views/Home.tsx";
import Articles from "./views/Articles.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "articles",
        Component: Articles,
      },
    ],
  },
]);

export default router;