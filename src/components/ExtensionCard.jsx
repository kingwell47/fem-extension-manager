import React, { useState } from "react";

const ExtensionCard = ({ logo, name, description, isActive }) => {
  const [isToggleActive, setIsToggleActive] = useState(isActive);

  return (
    <div className="card bg-(--color-elements-main) w-full h-50 border border-neutral-content p-5 rounded-box flex flex-col justify-between">
      <div className="flex gap-5 items-start">
        <img src={logo} alt={name} />
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-md text-secondary-content">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="btn bg-transparent shadow-none border-neutral-content rounded-3xl text-md font-normal">
          Remove
        </button>
        <input
          type="checkbox"
          className="toggle checked:bg-accent checked:border-0 w-9 h-5"
          checked={isToggleActive}
          onChange={() => setIsToggleActive(!isToggleActive)}
        />
      </div>
    </div>
  );
};

export default ExtensionCard;
