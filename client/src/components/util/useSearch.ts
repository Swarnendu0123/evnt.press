import { useState, useEffect } from "react";
import { EventData } from "@/assets/ts/event";
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
const useSearch = (searchTerm: string) => {
    
    const [filteredEvents, setFilteredEvents] = useState<EventProps[]>([]);
    useEffect(() => {
        if (!searchTerm)
            setFilteredEvents([]);
        return;
    }, [searchTerm]);

    useEffect(() => {
        if (searchTerm.trim() === " ") {
            setFilteredEvents(EventData);
        } else {
            // Filter events based on searchTerm
            setFilteredEvents(
                EventData.filter((event) =>
                    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    event.org_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    event.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    event.registration.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    event.location.toLowerCase().includes(searchTerm.toLowerCase())
                )
            )
            // and set filteredEvents
        }
    }, [searchTerm]);



    return filteredEvents;
}

export default useSearch;