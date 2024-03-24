import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NotFound404 from "./pages/not-found/not-found";
import HomePage from "./pages/home-page/home-page";
import RequestBuilder from "./pages/request-builder/request-builder";
import GlobalRoute from "./components/global-route/global-route";
import Success from "./components/success/success";
import FailureWindow from "./components/failure-window/failure-window";
import Window404 from "./components/404-window/404-window";
import {
  getCategoriesRequest,
  getCityRequest,
  getVacancyNamesRequest,
} from "./services/dataSlice";
/* eslint-disable react-hooks/exhaustive-deps */
function App() {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const isLoading = useSelector((state) => state.data.isLoading);

  useEffect(() => {
    dispatch(getCityRequest());
    dispatch(getVacancyNamesRequest());
    dispatch(getCategoriesRequest());
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isLoading ? (
        <p>Загрузка..</p>
      ) : (
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
            <Route path="/success" element={<Success />} />
            <Route path="/failure" element={<FailureWindow />} />
            <Route path="/404" element={<Window404 />} />
            {/* <Route path="/pay" element={}/> */}

            <Route path="*" element={<NotFound404 />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
