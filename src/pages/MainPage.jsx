import React from "react";
import TopBar from "../components/TopBar";
import ExtensionCard from "../components/ExtensionCard";

const MainPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <TopBar />
      <div>Some Filtering</div>
      <ExtensionCard />
    </div>
  );
};

export default MainPage;
