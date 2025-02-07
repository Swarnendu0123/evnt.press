import { useRecoilValue, useSetRecoilState } from "recoil";
import { eventState, inputState, searchTermState } from "@/state/state";
import EventCard from "@/components/event/EventCard";
import Navigation from "@/components/util/Navigation";
import Footer from "@/components/util/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { EventProps } from "@/assets/ts/event";

const Browse: React.FC = () => {
  const events: EventProps[] = useRecoilValue(eventState);
  const input: string = useRecoilValue(inputState);
  const searchTerm: string = useRecoilValue(searchTermState);
  const navigate = useNavigate();
  // To clear the search bar input when needed
  const setInput = useSetRecoilState(inputState);
  const count: number = events.length;

  // Redirect to the home page and clear the search bar if searchTerm is empty
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setInput("");
      navigate("/");
    }
  }, [searchTerm, navigate, setInput]);

  return (
    <Link to={`/browse/${input}`}>
      <div className="flex flex-col h-screen">
        <Navigation />
        <div className="mt-3 flex-1">
          <div>
            <h2 className="font-bold text-gray-500">
              {count} {count === 1 ? "event" : "events"} found
            </h2>
          </div>
          <div className="flex flex-wrap pb-3 ">
            {events.map((event) => (
              <EventCard key={event.id} data={event} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </Link>
  );
};

export default Browse;
