import React, { useState } from "react";
import TopBar from "../components/TopBar";
import ExtensionCard from "../components/ExtensionCard";

import extensionsData from "../data.json";

const MainPage = () => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <>
      <TopBar />
      <div className="flex flex-col gap-6 lg:max-w-5/6">
        <h1 className="text-4xl font-bold text-center">Extensions List</h1>
        <ul className="flex items-center justify-center text-center gap-3">
          {["All", "Active", "Inactive"].map((item, index) => (
            <li key={index}>
              <button
                className={`btn rounded-3xl px-5 py-6 text-xl shadow-none ${
                  activeButton == index
                    ? `bg-accent text-neutral font-bold`
                    : `border border-neutral-content font-light`
                }`}
                onClick={() => setActiveButton(index)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:max-w-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-full gap-3">
        {extensionsData.map((item, index) => {
          return <ExtensionCard key={index} {...item} />;
        })}
      </div>
    </>
  );
};

export default MainPage;
