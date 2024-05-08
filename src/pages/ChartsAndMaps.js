// ChartsAndMaps.js
import React from "react";
import ChartsPage from "../components/Charts";
import MapsPage from "../components/Maps";

const ChartsAndMaps = () => {
  return (
    <div>
      <h2>Charts and Maps</h2>
      <div>
        <div className="bg-gray-800 min-h-screen flex justify-center items-center">
          <div className="bg-white rounded-lg shadow max-w-md px-8 py-10 overflow-hidden">
            <ChartsPage />
            {/* <MapsPage /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsAndMaps;
