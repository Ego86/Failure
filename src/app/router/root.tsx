import Auth from "@/pages/auth/ui/page";
import Home from "../../pages/home/ui/page";
import { Outlet, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
      <Routes>
        <Route element={<><h1>loyaut</h1> <Outlet /></>}>
          <Route path="/" element={<Home />} />
        </Route>
          <Route path="/auth" element={<Auth />} />
      </Routes>
  );
};

export default Router;
