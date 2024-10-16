// React core and custom hooks
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import lazyWithRetry from "../Utilities/LazyWithRetry";

// Main Proprietary component
import Login from "../Templates/Login/Login";
import NotFound from "../Templates/NotFound/NotFound";

// Authorization and Authentication
import AuthGuard from "../Auth/AuthGuard";

// Child Routes

// Proprietary component
const Test = lazyWithRetry(() => import("../Components/Test/Test"));
const Home = lazyWithRetry(() => import("../Components/Home/Home"));

export default function RootRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<AuthGuard />} />

      <Route element={<AuthGuard isReroute={false} />}>
        <Route
          path="home"
          element={
            <Suspense fallback="loading ..">
              <Home />
            </Suspense>
          }
        />
        <Route
          path="test"
          element={
            <Suspense fallback="loading ..">
              <Test />
            </Suspense>
          }
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
