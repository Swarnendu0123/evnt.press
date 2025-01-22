import { LocationsData } from "../assets/ts/location";
import EventCard from "../components/event/EventCard";
import Footer from "../components/util/Footer";
import Location from "../components/util/Location";
import Navigation from "../components/util/Navigation";
import { EventData } from "../assets/ts/event";

const Landing = () => {
  return (
    <div>
      <Navigation />
      {/* Trending  start*/}
      <div className="mt-3">
        <div>
          <h2 className="font-bold text-gray-500">Trending Events</h2>
        </div>
        <div className="flex overflow-x-auto pb-3">
          {EventData.map((event) => (
            <EventCard data={event} />
          ))}
        </div>
      </div>
      {/* Trending  end*/}

      {/* Location  start*/}
      <div>
        <div>
          <h2 className="font-bold text-gray-500 mt-3">Select by Location</h2>
        </div>
        <div className="flex">
          {LocationsData.map((location) => (
            <Location data={location} />
          ))}
        </div>
      </div>
      {/* Location  end*/}

      {/* Trending  start*/}
      <div className="mt-3">
        <div>
          <h2 className="font-bold text-gray-500">Trending Concerts</h2>
        </div>
        <div className="flex overflow-x-auto pb-3">
          {EventData.map((event) => (
            <EventCard data={event} />
          ))}
        </div>
      </div>
      {/* Trending  end*/}

      <Footer />
    </div>
  );
};

export default Landing;
