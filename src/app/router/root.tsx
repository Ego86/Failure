import { Login } from "@/pages/auth/login/index";
import Home from "../../pages/home/ui/page";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "../layouts/baseLayout";

const Router = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/auth" element={<Login />} />
    </Routes>
  );
};

export default Router;
