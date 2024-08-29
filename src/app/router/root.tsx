import Auth from "@/pages/auth/ui/page";
import Home from "../../pages/home/ui/page";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "../layouts/baseLayout";

const Router = () => {
  return (
      <Routes>
        <Route element={<BaseLayout/>}>
          <Route path="/" element={<Home />} />
        </Route>
          <Route path="/auth" element={<Auth />} />
      </Routes>
  );
};

export default Router;
