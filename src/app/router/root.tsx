import { Route, Routes } from "react-router-dom";
import BaseLayout from "../layouts/baseLayout";
import { Home, Login } from "./lazyPages";
import { Suspense } from "react";
import Post from "@/pages/post/ui/post";
import CreatePost from "@/pages/create-post/create-post";
import Profile from "@/pages/profile";
import Loader from "@/shared/ui/loader/loader";

const Router = () => {
  return (
    <Suspense
      fallback={
        <Loader style={{ display: "flex", justifyContent: "center" }} />
      }
    >
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>
        <Route path="/auth" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
