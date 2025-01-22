import eventImage from "../../assets/ethindia.png";

const EventCard = () => {
  return (
    <div className="border rounded-lg p-2 w-96 shadow-lg m-2 min-w-96">
      <img src={eventImage} alt="event" className="rounded-lg" />
      {/* the background should be matched with the img color */}
      <div className="text-left">
        {/* Event title */}
        <h2 className="text-2xl font-semibold p-1">ETH India 2025</h2>

        {/* Meta data */}
        <div className="flex justify-between">
          <p className="text-sm text-gray-500 p-1 flex font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="19px"
              fill="undefined"
            >
              <path d="M80-120v-720h400v160h400v560H80Zm80-80h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm320 480h320v-400H480v400Zm80-240v-80h160v80H560Zm0 160v-80h160v80H560Z" />
            </svg>
            <p className="text-sm text-gray-500">ETH Global</p>
          </p>
          <div className="flex font-bold p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="18px"
              // orange color
              fill="#F66B10"
            >
              <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
            </svg>
            <p className="text-sm text-orange-500">Jul 2, 2021</p>
          </div>
        </div>

        {/* actions */}

        <div className="flex justify-between">
          <div className="text-sm text-gray-500 p-1">300 Members Joined</div>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
