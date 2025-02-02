import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSearch from './useSearch';
interface EventProps {
    
  name: string;
  org_name: string;
  date: string;
  registration: string;
  registration_fee: number;
  image: string;
  registered: number;
  location: string;
  verified?: boolean;

}

const Navigation = () => {
  const[input, setInput] = useState(" ");
  const [searchTerm, setSearchTerm] = useState("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setInput(e.target.value);
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    if(e.key === "Enter"){
      setSearchTerm(input);
    }
  }
  const FilteredEvents: EventProps[] = useSearch(searchTerm); 
  console.log(FilteredEvents)
  return (
    <div className="flex justify-between items-center">
      <div className=" text-left">
        <span className="text-2xl font-bold text-gray-500">Evnt.press</span>
        <hr />
        <p className="text-gray-500">Explore Events, that excites you!</p>
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Search for events"
          className="border rounded-lg p-2 w-96 shadow-lg"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
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
        <div>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
