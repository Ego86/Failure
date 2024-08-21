import Home from "../../pages/home/ui/page";
import { Outlet, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<><h1>loyaut</h1> <Outlet /></>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
  );
};

export default Router;
