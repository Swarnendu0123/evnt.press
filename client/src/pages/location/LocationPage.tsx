// This page lists all the events based on location
import { EventProps } from "@/assets/ts/event";
import Navigation from "@/components/util/Navigation";
import EventCard from "@/components/event/EventCard";
import { useParams,Link } from "react-router-dom";
import {useRecoilState} from 'recoil';
import { eventState } from "@/state/state";
import Footer from "@/components/util/Footer";

const Location = () => {
    // extract the id 
    const { id } = useParams<{ id: string }>();
    const [filteredEvents] = useRecoilState<EventProps[]>(eventState)
    const events: EventProps[] = filteredEvents.filter((event)=> event.location === id);
    const count: number = events.length;
    
    return (
        <div className="flex flex-col h-screen">
            <Navigation/>
            <div className="mt-3 flex-1">
          <div>
            <h2 className="font-bold text-xl text-gray-500">
              {count} {count === 1 ? "event" : "events"} found
            </h2>
          </div>
          <div className="flex flex-wrap pb-3 ">
            {events.map((event) => (
              <Link to={`/events/${event.id}`}>
                <EventCard key={event.id} data={event} />
              </Link>
            ))}
          </div>
        </div>            
          <Footer/>
        </div>
    );
}


export default Location;