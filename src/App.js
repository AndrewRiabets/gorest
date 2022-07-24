import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import routes from "./routes/routes";

// import StartPage from "./components/StartPage/StartPage";
// import UsersList from "./components/UsersList/UsersList";
// import UserEdit from "./components/UserEdit/UserEdit";
// import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

const StartPage = lazy(() => import("./components/StartPage/StartPage"));
const UsersList = lazy(() => import("./components/UsersList/UsersList"));
const UserEdit = lazy(() => import("./components/UserEdit/UserEdit"));
const NotFoundPage = lazy(() =>
  import("./components/NotFoundPage/NotFoundPage")
);

export default function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route exact path={routes.start} element={<StartPage />}></Route>
          <Route exact path={routes.users} element={<UsersList />}></Route>
          <Route exact path={routes.edit} element={<UserEdit />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
