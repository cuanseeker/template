import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootRoutes from "./Routes/RootRoute";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/*" element={<RootRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
