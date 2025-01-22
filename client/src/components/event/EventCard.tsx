import React, { useEffect, useState } from "react";
import { Vibrant } from "node-vibrant/browser";

interface EventProps {
  data: {
    name: string;
    org_name: string;
    date: string;
    registration: string;
    registration_fee: number;
    image: string;
    registered: number;
    location: string;
  };
}

const EventCard: React.FC<EventProps> = ({ data }) => {
  const {
    name,
    org_name,
    date,
    registration,
    registration_fee,
    image,
    registered,
    location,
  } = data;

  const [dominantColor, setdominantColor] = useState<string>("#000");

  useEffect(() => {
    // Extract the dominant color from the image
    Vibrant.from(image)
      .getPalette()
      .then((palette) => {
        if (palette.Vibrant) {
          setdominantColor(palette.Vibrant.hex);
        }
      })
      .catch((error) => {
        console.error("Error extracting color:", error);
      });
  }, [image]);

  return (
    <div className="border border-white hover:border-gray-100 rounded-lg p-2 w-96 shadow-lg m-2 min-w-96">
      <img src={image} alt="event" className="rounded-lg h-52" />
      {/* the background should match the dominant color of the image */}
      <div className="text-left">
        {/* Event title */}
        <h2 className="text-2xl font-semibold p-1">{name}</h2>

        {/* Meta data */}
        <div className="text-sm text-gray-500 p-1 flex justify-between">
          <div className="text-sm text-gray-500 p-1 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="19px"
              fill="#5E6062"
            >
              <path d="M80-120v-720h400v160h400v560H80Zm80-80h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm320 480h320v-400H480v400Zm80-240v-80h160v80H560Zm0 160v-80h160v80H560Z" />
            </svg>
            <p className="text-sm text-gray-500">{org_name}</p>
          </div>
          <div className="text-sm text-gray-500 p-1 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="18px"
              fill="#5E6062"
            >
              <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
            </svg>
            {registered} Registered
          </div>
        </div>

        <div className="flex justify-between">
          <div className="text-sm text-gray-500 p-1 flex font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="19px"
              viewBox="0 -960 960 960"
              width="19px"
              fill="#5E6062"
            >
              <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
          <div className="text-sm text-gray-500 p-1 flex font-bold">
            <p className="text-sm text-gray-500">
              {registration == "Open"
                ? "Registration Open"
                : "Registration Closed"}
            </p>
          </div>
        </div>

        {/* actions */}
        <div className="flex justify-between">
          <div className="text-sm p-1 flex font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="18px"
              fill="#5E6062"
            >
              <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
            </svg>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
          <button
            className={`text-sm text-white py-2 px-4 rounded-lg`}
            disabled={registration == "Open"}
            style={
              registration == "Open"
                ? { backgroundColor: dominantColor }
                : { backgroundColor: "#c2c2c2" }
            }
          >
            {registration_fee === 0
              ? "Register for Free"
              : registration == "Open" ? `Buy Ticket ($${registration_fee})`: `Registration Closed`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
