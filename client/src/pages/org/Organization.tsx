/* eslint-disable react-hooks/rules-of-hooks */
import Navigation from "@/components/util/Navigation";
import Footer from "@/components/util/Footer";
import { Link, useParams } from "react-router-dom";
import { OrganizationProps, OrganizationData } from "@/assets/ts/organization";
import { EventProps } from "@/assets/ts/event";
import EventCard from "@/components/event/EventCard";
import { useState } from "react";

const Organization = () => {
  const { id } = useParams<{ id: string }>();
  const org: OrganizationProps | undefined = OrganizationData.find(
    (org) => org.org_name === id
  );

  if (!org) {
    return <div className="text-center text-xl font-bold">Organization not found</div>;
  }

  const [active, setActive] = useState<string>("Current");
  const [events, setEvents] = useState<EventProps[]>(org.events.filter((event) => event.registration === "Open") || []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const category = e.currentTarget.textContent;
    if (!category) return;

    let filteredEvents: EventProps[] = [];
    if (category === "Current") {
      filteredEvents = org.events.filter((event) => event.registration === "Open");
    } else if (category === "Upcoming") {
      filteredEvents = org.events.filter((event) => event.registration === "Upcoming");
    } else if (category === "Closed") {
      filteredEvents = org.events.filter((event) => event.registration === "Closed");
    }

    setEvents(filteredEvents);
    setActive(category);
  };

  return (
    <div>
      <Navigation />
      <div className="min-h-screen mt-5 w-full flex flex-col items-center gap-4">
        {/* Organization Banner */}
        <div className="relative w-4/5 h-64 border-0 shadow-lg overflow-hidden rounded-3xl">
          <img
            src={org.image}
            alt="logo"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/100"></div>
        </div>

        {/* Organization Details */}
        <div className="w-4/5 text-left">
          <h1 className="text-4xl font-extrabold">{org.org_name}</h1>
          <p className="font-semibold text-base text-gray-500">{org.description}</p>
        </div>

        {/* Events Section */}
        <div className="w-4/5 flex flex-col gap-4">
          <h2 className="font-bold text-lg">All Events</h2>

          {/* Filter Buttons */}
          <div className="flex gap-4 text-left">
            {["Current", "Upcoming", "Closed"].map((category) => (
              <button
                key={category}
                className={`font-bold transition-all ${
                  active === category ? "underline" : ""
                }`}
                onClick={handleClick}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Events List */}
          <div className="flex flex-wrap w-full justify-start gap-4">
            {events.length > 0 ? (
              events.map((event) => (
                <Link key={event.id} to={`/event/${event.id}`}>
                  <EventCard data={event} />
                </Link>
              ))
            ) : (
              <div className="text-gray-500">No {active} events right now</div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Organization;
