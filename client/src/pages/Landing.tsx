import EventCard from "../components/event/EventCard";
import Avatar from "../components/util/Avatar";
import Location from "../components/util/Location";

const Landing = () => {
  const locations = [
    {
      name: "Bangalore",
      image: "https://static.toiimg.com/photo/54559212.cms",
    },
    {
      name: "Mumbai",
      image:
        "https://maharashtratourism.gov.in/wp-content/uploads/2023/10/marin-drive.jpg",
    },
    {
      name: "Delhi",
      image:
        "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg",
    },
    {
      name: "Kolkata",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/howrah-bridge-howrah-west-bengal-city-1-hero?qlt=82&ts=1726644778421",
    },
    {
      name: "Goa",
      image:
        "https://www.india.com/wp-content/uploads/2024/06/Calangute-Beach-1.jpg",
    },
    {
      name: "Hydrabad",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/charminar.jpg?w=1400&h=1400&s=1",
    },
    {
      name: "Noida",
      image: "https://www.holidify.com/images/bgImages/NOIDA.jpg",
    },
  ];

  return (
    <div>
      {/* header start */}
      <div className="flex justify-between">
        <h1 className="font-bold text-gray-500 mt-3">
          Explore Events, that excites you!
        </h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Search for events"
            className="border rounded-lg p-2 w-96 shadow-lg"
          />
          <div>
            <Avatar />
          </div>
        </div>
      </div>
      {/* header end */}

      {/* Trending  start*/}
      <div>
        <div>
          <h2 className="font-bold text-gray-500">Trending Events</h2>
        </div>
        <div className="flex overflow-x-auto p-3">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
      {/* Trending  end*/}

      {/* Location  start*/}
      <div>
        <div>
          <h2 className="font-bold text-gray-500 mt-3">Select by Location</h2>
        </div>
        <div className="flex">
          {locations.map((location) => (
            <Location data={location} />
          ))}
        </div>
      </div>
      {/* Trending  end*/}
    </div>
  );
};

export default Landing;
