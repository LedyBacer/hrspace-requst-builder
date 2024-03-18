import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound404 from "./pages/not-found/not-found";
import AppHeader from "./components/app-header/app-header";
import HomePage from "./pages/home-page/home-page";
import RequestBuilder from "./pages/request-builder/request-builder";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Routes>
      <Route element={<AppHeader />}>
        <Route element={<Footer />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/request-builder" element={<RequestBuilder />} />
          {/* <Route path="/request-builder/2" element={}/> */}
          {/* <Route path="/request-builder/3" element={}/> */}
          {/* <Route path="/pay" element={}/> */}

          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
