import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Bookmark from "./bookmark";
import Main from "./components/main";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Main />} />
        <Route path={"/book-mark"} element={<Bookmark />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
