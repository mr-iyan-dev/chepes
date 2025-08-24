import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Home.jsx"));
const Form = lazy(() => import("./pages/Form.jsx"));
const Signin = lazy(() => import("./pages/Signin.jsx"));
const Admin = lazy(() => import("./pages/Admin.jsx"));

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true, }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/form" element={<Form />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
// basename= '/chepes'