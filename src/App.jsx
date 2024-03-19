import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound404 from "./pages/not-found/not-found";
import HomePage from "./pages/home-page/home-page";
import RequestBuilder from "./pages/request-builder/request-builder";
import GlobalRoute from "./components/global-route/global-route";

function App() {
  return (
    <Routes>
      <Route element={<GlobalRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/request-builder/1"
          element={<RequestBuilder page={1} />}
        />
        <Route
          path="/request-builder/2"
          element={<RequestBuilder page={2} />}
        />
        <Route
          path="/request-builder/3"
          element={<RequestBuilder page={3} />}
        />
        {/* <Route path="/pay" element={}/> */}

        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
}

export default App;
