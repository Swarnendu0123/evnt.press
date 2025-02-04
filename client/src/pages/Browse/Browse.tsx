//Issues
//1. The search bar should be cleared when the user is redirected to the home page
import { useRecoilValue } from "recoil";
import { eventState, inputState, searchTermState } from "@/state/state";
import EventCard from "@/components/event/EventCard";
import Navigation from "@/components/util/Navigation";
import Footer from "@/components/util/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
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

const Browse = () => {
  const events: EventProps[] = useRecoilValue(eventState);
  const input: string = useRecoilValue(inputState);
  const navigate = useNavigate();
  const searchTerm: string = useRecoilValue(searchTermState);
  const count: number = events.length;
  //if the search bar is empty, redirect to the home page
  useEffect(() => {
    if (searchTerm.trim() === "") {
      navigate("/");
    }
  }, [searchTerm]);

  return (
    <Link to={`/browse/${input}`}>
      <div className="flex flex-col h-screen">
        <Navigation />
        <div className="mt-3 flex-1">
          <div>
            <h2 className="font-bold text-gray-500">{count} {`${count===1?'event':'events'}`} found</h2>
          </div>
          <div className="flex flex-wrap pb-3 ">
            {events.map((event) => (
              <EventCard data={event} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </Link>
  );
};

export default Browse;
