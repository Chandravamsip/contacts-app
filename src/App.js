import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ContactPage from "./pages/ContactHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateContact from "./pages/CreateContact";
import EditContact from "./pages/EditContact";
import ChartsAndMaps from "./pages/ChartsAndMaps";

function App() {
  const [isOpen, setIsOpen] = useState(true); // State for sidebar visibility

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="App bg-gray-800 min-h-screen flex">
      {isOpen && (
        <Sidebar className="w-64 fixed z-10 transition duration-300 ease-in-out">
          <button
            onClick={toggleSidebar}
            className="absolute top-0 right-0 p-4 focus:outline-none"
          >
            <svg
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Sidebar>
      )}
      <div className="flex-grow flex">
        {" "}
        {/* Flex container for sidebar and main content */}
        <Router>
          <div className={isOpen ? "ml-64 flex-grow" : "flex-grow"}>
            {" "}
            {/* Adjust margin when sidebar is open */}
            <Routes>
              <Route path="/" element={<ContactPage />} />
              <Route path="/create-contact" element={<CreateContact />} />
              <Route path="/edit-contact/:id" element={<EditContact />} />
              <Route path="/charts-and-maps" element={<ChartsAndMaps />} />
            </Routes>
          </div>
        </Router>
      </div>
      <button
        onClick={toggleSidebar}
        className="fixed bottom-4 right-4 p-4 bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-full text-white shadow-md md:hidden"
      >
        {" "}
        {/* Mobile toggle button */}
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H11M13 18V16H20V18Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default App;
