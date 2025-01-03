import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { SiDatadotai } from "react-icons/si";

const Databot = () => {
  const [query, setQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const suggestions = ["Supplier_references", "data_lake", "Nation References"];

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-8 bg-white border border-gray-300 rounded-3xl shadow-md mt-3 mb-2">
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold">Databot</h1>
          <span className="text-gray-500 text-xl">
            <SiDatadotai />
          </span>
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="text-gray-600">Connected Data: Clothing Sales</span>
          <IoIosArrowDown className="text-xl text-gray-500" />
        </div>
      </div>

      <hr className="border-t border-gray-200 my-2" />

      {dropdownOpen && (
        <div className="mt-2 p-4 border border-gray-300 rounded-lg shadow-md bg-white absolute z-10 w-72 left-3/4 ml-2">
          <input
            type="text"
            placeholder="search data"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          />

          <ul>
            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="text-gray-600 hover:bg-gray-100 p-2 rounded-lg"
                >
                  {suggestion}
                </li>
              ))
            ) : (
              <li className="text-gray-500">No results found</li>
            )}
          </ul>
        </div>
      )}

      <div className="my-6 text-center">
        <h2 className="text-3xl font-extrabold">
          <span className="text-blue-700">AI Conversational</span> Data
        </h2>
        <p className="mt-1 text-gray-600">
          Your personal AI data assistant. Seamlessly integrate your database
          with bbjxnaaza
        </p>
        <p className="mt-1 text-gray-600">
          maing. Get instant analysis and answers, optimizing growth metrics
        </p>
        <p className="mt-1 text-gray-600">analyst-grade responses.</p>
      </div>

      <div className="grid grid-cols-2 gap-8 my-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="p-6 bg-gray-100 rounded-lg flex justify-between items-center"
          >
            <span>Box {i}</span>
            <MdArrowOutward />
          </div>
        ))}
      </div>

      <div className="p-6 bg-gray-50 rounded-lg shadow-md max-h-64 overflow-y-auto">
        <h3 className="text-xl font-semibold">Summary</h3>
        <p className="mt-1 text-gray-600">
          Here are some random lines of text for summary. Integer nec odio.
          Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <p className="mt-1 text-gray-600">
          Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
          ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
        </p>
        <p className="mt-1 text-gray-600">Here are some sample references:</p>

        <div className="mt-4 space-y-2 text-gray-600">
          <p className="mt-1 font-semibold">Basic Reference:</p>
          <ul className="list-disc pl-5">
            <li>Supplier Name: Acme Corporation</li>
            <li>Contact Name: John Smith, Sales Manager</li>
            <li>Phone Number: (555) 555-5555</li>
            <li>Email Address: abc@gmail.com</li>
            <li>
              Relationship: Supplied office furniture for our headquarters in
              2003.
            </li>
          </ul>

          <p className="mt-1 font-semibold">Detailed Reference:</p>
          <ul className="list-disc pl-5">
            <li>Supplier Name: Global Tech Solutions</li>
            <li>Contact Name: Jane Doe, Account Manager</li>
            <li>Phone Number: (555) 555-1234</li>
            <li>Email Address: abgggc@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 relative">
        <input
          type="text"
          placeholder="Ask your AI for data summary...."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-4 bg-white border border-gray-300 rounded-2xl w-full pr-16 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-4 py-2 rounded-3xl hover:bg-blue-600 transition duration-200"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Databot;
