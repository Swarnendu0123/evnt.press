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
    verified?: boolean;
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
    verified,
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
              className="mr-1"
            >
              <path d="M80-120v-720h400v160h400v560H80Zm80-80h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm320 480h320v-400H480v400Zm80-240v-80h160v80H560Zm0 160v-80h160v80H560Z" />
            </svg>
            <p className="text-sm text-gray-500 flex items-center">
              {org_name}
              {verified && (
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18px"
                    viewBox="0 -960 960 960"
                    width="18px"
                    fill="#4bad00"
                    className="ml-1"
                  >
                    <path d="m429-449-53-53q-14-14-31.5-14T314-503q-14 14-14 31.5t14 31.5l73 73q18 18 42 18t42-18l175-175q13-13 13.5-31.5T646-605q-13-13-30.5-12.5T585-604L429-449ZM307-74l-56-93-105-24q-22-5-35.5-22.5T99-254l10-107-71-80q-15-18-15-39t15-39l71-80-10-107q-2-23 11.5-40.5T146-769l105-24 56-93q11-18 32-25.5t42 .5l99 43 99-43q21-8 42-.5t32 25.5l56 93 105 24q22 5 35.5 22.5T861-706l-10 107 71 80q15 18 15 39t-15 39l-71 80 10 107q2 23-11.5 40.5T814-191l-105 24-56 93q-11 18-32 25.5t-42-.5l-99-43-99 43q-21 8-42 .5T307-74Zm74-104 99-43 99 43 55-93 104-23-8-107 69-79-69-79 8-107-104-23-55-93-99 43-99-43-55 93-104 22 8 108-69 79 70 79-9 108 104 23 55 92Zm99-302Z" />
                  </svg>
                </div>
              )}
            </p>
          </div>
          <div className="text-sm text-gray-500 p-1 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="18px"
              fill="#5E6062"
              className="mr-1"
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
              className="mr-1"
            >
              <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
          <div className="text-sm text-gray-500 p-1 flex font-bold">
            <p className="text-sm text-gray-500">Registrations {registration}</p>
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
              className="mr-1"
            >
              <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
            </svg>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
          {registration == "Upcoming" && (
            <button
              className={`text-sm text-white py-2 px-4 rounded-lg flex items-center cursor-pointer`}
              style={{ backgroundColor: dominantColor }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#fff"
                className="mr-2"
              >
                <path d="M217.29-182q-24.29 0-41.79-17.29t-17.5-41.5q0-24.21 17.35-41.71T217-300h-23v-206q0-100 59-178.5T409-782v-45q0-30 20.5-50.5T480-898q30 0 50.5 20.5T551-827v45q98 19 156.5 97T766-506v206h-23q24.3 0 41.65 17.29Q802-265.42 802-241.21t-17.34 41.71Q767.31-182 743.02-182H217.29ZM480-487Zm.79 436Q446-51 421.5-75.15T397-134h167q0 35-24.21 59t-59 24ZM312-300h336v-206q0-70-49-119t-119-49q-70 0-119 49t-49 119v206ZM79.95-505Q57-505 42-521.49 27-537.98 30-560q10-74 40-138t78.17-117.37Q163-832 186.5-831q23.5 1 38.5 18t12.5 39.5q-2.5 22.5-17.72 38.68-32.64 35.49-54.21 81.15Q144-608 136.6-557.16 133-536 116.95-520.5q-16.05 15.5-37 15.5Zm800.26 0Q859-505 843-520.5T823-557q-7-52-29-97t-55-82q-15-16-17.5-38.5T734-814q15-17 39-18.5t39 15.5q48 52 78 117.5t40.2 139.53Q933-538 918.21-521.5t-38 16.5Z" />
              </svg>
              Notify me
            </button>
          )}
          {registration == "Closed" && (
            <button
              className={`text-sm text-white py-2 px-4 rounded-lg flex items-center cursor-pointer`}
              style={{ backgroundColor: "#c2c2c2" }}
            >
              Registration Closed
            </button>
          )}
          {registration == "Open" && registration_fee > 0 && (
            <button
              className={`text-sm text-white py-2 px-4 rounded-lg flex items-center cursor-pointer`}
              style={{ backgroundColor: dominantColor }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#fff"
                className="mr-2"
              >
                <path d="M180-158q-49.7 0-83.85-34.11Q62-226.22 62-275.86v-126.81q0-10.33 6.15-17.27 6.15-6.94 15.81-8.68Q105-434 119.5-447t14.5-33.5q0-20.5-14.5-33.5t-35.54-17.35q-9.66-1.77-15.81-8.85Q62-547.27 62-557v-127.19q0-49.62 34.15-83.71Q130.3-802 180-802h600q49.7 0 83.85 34.11Q898-733.78 898-684.14v128.26q0 9.88-6.15 16.38-6.15 6.49-15.81 8.12Q855-527 840.5-514T826-480.5q0 20.5 14.5 33.5t35.54 18.35q9.66 1.62 15.81 8.08T898-404v128.19q0 49.62-34.15 83.71Q829.7-158 780-158H180Zm0-118h600v-74q-31-20-51.5-54.38-20.5-34.37-20.5-76Q708-522 728.5-556q20.5-34 51.5-54v-74H180v74q33 20 52.5 54.15t19.5 75.5q0 41.35-19.5 75.85Q213-370 180-350v74Zm300.29-44Q498-320 511-332.79t13-30.5Q524-381 511.41-394t-31.2-13q-17.21 0-30.71 12.59t-13.5 31.2Q436-346 449.29-333t31 13Zm0-116Q498-436 511-449.29t13-31Q524-498 511.41-511t-31.2-13q-17.21 0-30.71 12.59t-13.5 31.2q0 17.21 13.29 30.71t31 13.5Zm0-117Q498-553 511-566.29t13-31q0-17.71-12.59-30.21t-31.2-12.5q-17.21 0-30.71 12.3T436-597.21q0 17.21 13.29 30.71t31 13.5Zm-.29 73Z" />
              </svg>
              Buy Ticket ($ {registration_fee})
            </button>
          )}
          {registration == "Open" && registration_fee == 0 && (
            <button
              className={`text-sm text-white py-2 px-4 rounded-lg flex items-center cursor-pointer`}
              style={{ backgroundColor: dominantColor }}
            >
              Register
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#fff"
              >
                <path d="M575-421H216.98q-24.29 0-41.64-17.29Q158-455.58 158-479.79t17.34-41.71q17.35-17.5 41.64-17.5H575L437.79-676.21Q420-694 419.5-718.5t17.5-42.98q18-17.52 42.5-17.02t42.31 18.32L759.6-522.09q8.4 8.41 13.4 19.72 5 11.31 5 22.53 0 11.21-5 22.53Q768-446 760-438L521-199q-19 19-42 18.5t-41-19.02q-18-18.48-18-42.65 0-24.16 18-41.83l137-137Z" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
