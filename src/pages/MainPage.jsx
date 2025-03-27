import React, { useState } from "react";
import TopBar from "../components/TopBar";
import ExtensionCard from "../components/ExtensionCard";

const MainPage = () => {
  const [activeButton, setActiveButton] = useState(0);

  const sampleData = {
    logo: "./assets/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <TopBar />
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-center">Extensions List</h1>
        <ul className="flex items-center justify-center text-center gap-3">
          {["All", "Active", "Inactive"].map((item, index) => (
            <li key={index}>
              <button
                className={`btn rounded-3xl px-5 py-6 text-2xl font-normal shadow-none ${
                  activeButton == index
                    ? `bg-accent text-neutral`
                    : `border border-neutral-content`
                }`}
                onClick={() => setActiveButton(index)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 w-full h-full">
        <ExtensionCard {...sampleData} />
      </div>
    </div>
  );
};

export default MainPage;
