import React from "react";
import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation";
import HomeDarkAnimation from "../views/all-home-version/HomeDarkAnimation";
import HomeDark from "../views/all-home-version/HomeDark";
import HomeVideoLight from "../views/all-home-version/HomeVideoLight";
import HomeVideoDark from "../views/all-home-version/HomeVideoDark";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/preview" element={<Preview />} />
        <Route path="/home-light" element={<HomeLight />} />
        <Route path="/home-light-animation" element={<HomeLightAnimation />} />
        <Route path="/home-dark-animation" element={<HomeDarkAnimation />} />
        <Route path="/" element={<HomeDark />} />
        <Route path="/home-video-light" element={<HomeVideoLight />} />
        <Route path="/home-video-dark" element={<HomeVideoDark />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
