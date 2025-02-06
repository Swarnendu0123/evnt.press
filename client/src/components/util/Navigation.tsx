//Remove the filteredEvents from console.log and modify the code accordingly

import Avatar from "./Avatar";
import { Link,useNavigate } from "react-router-dom";
import {  useEffect } from "react";
import useSearch from "./useSearch";
import { useRecoilState } from "recoil";
import { eventState,inputState,searchTermState } from "@/state/state";
import { EventProps } from "@/assets/ts/event";

const Navigation = () => {
  const [input, setInput] = useRecoilState(inputState);
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);
  const [, setFilteredEvents] = useRecoilState<EventProps[]>(eventState);
  const navigate = useNavigate();

  // Get search results
  const results = useSearch(searchTerm);

  // Update input value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // It set the searchTerm when the user presses Enter and then only the user is redirected to the browse page
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setSearchTerm(input);
      navigate(`/browse/${input}`);
    }
    if (e.key === "Enter" && input.trim() === "") {
      navigate("/");
    }
  };

  // Update Recoil state when results change
  useEffect(() => {
    setFilteredEvents(results);
  }, [results, setFilteredEvents]);


  return (
    <div className="flex justify-between items-center">
      {/* Left Section */}
      <div className="text-left">
        <span className="text-2xl font-bold text-gray-500">Evnt.press</span>
        <hr />
        <p className="text-gray-500">Explore events that excite you!</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for events"
          className="border rounded-lg p-2 w-96 shadow-lg"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        {/* Create Event Button */}
        <div className="mx-3">
          <Link
            className="bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded-lg flex items-center"
            to="/event/create"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#fff"
            >
              <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </Link>
        </div>

        {/* Avatar Component */}
        <Avatar />
      </div>
    </div>
  );
};

export default Navigation;
