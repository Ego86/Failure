import { Route, Routes } from "react-router-dom";
import BaseLayout from "../layouts/baseLayout";
import { Home, Login } from "./lazyPages";
import { Suspense } from "react";

const Router = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post:id" element={<Post/>}/>
        </Route>
        <Route path="/auth" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
