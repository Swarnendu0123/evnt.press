import {
  Phone,
  MapPin,
  MessageCircle,
  Bookmark,
  ChevronLeft,
  Heart
} from "lucide-react";
import Navigation from "../../../components/util/Navigation";

const eventDetails = {
  title: "Shere Bangla Concert",
  date: "25-27 October, 22",
  location: "ABC Avenue, Dhaka",
  price: "$299 USD",
  image:
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1500&q=80",
  organizer: {
    name: "Tamim Ikram",
    role: "Event Organizer",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
  },
  attendees: [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80",
  ],
  description:
    "Ultricies arcu venenatis in lorem faucibus lobortis at. East odio varius nisi congue aliquam nunc est sit pult convallis magna. Est scelerisque dignissim non nibh...",
};

export default function EventPage() {
  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Event Image */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            <img
              src={eventDetails.image}
              alt={eventDetails.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Top Navigation */}
            <div className="absolute top-0 w-full px-6 py-6 flex justify-between items-center">
              <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                <Heart className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Right Column - Event Details */}
          <div className=" rounded-3xl p-8 shadow-sm bg-gray-50">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {eventDetails.title}
                </h1>
                <div className="flex items-center mb-2 text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-base">{eventDetails.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="text-base">{eventDetails.date}</span>
                </div>
              </div>
              <div className="bg-orange-100 px-4 py-2 rounded-xl">
                <span className="text-orange-600 font-semibold text-lg">
                  {eventDetails.price}
                </span>
              </div>
            </div>

            {/* Attendees */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    {eventDetails.attendees.map((avatar, index) => (
                      <img
                        key={index}
                        src={avatar}
                        alt="Attendee"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="ml-4 text-base text-gray-600">
                    15.7k+ Members are joined
                  </span>
                </div>
                <button className="text-orange-500 text-base font-medium hover:text-orange-600">
                  VIEW ALL / INVITE
                </button>
              </div>
            </div>

            {/* Organizer */}
            <div className="flex items-center justify-between mb-8 p-4 bg-white rounded-xl">
              <div className="flex items-center">
                <img
                  src={eventDetails.organizer.avatar}
                  alt={eventDetails.organizer.name}
                  className="w-14 h-14 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {eventDetails.organizer.name}
                  </h3>
                  <p className="text-base text-gray-600">
                    {eventDetails.organizer.role}
                  </p>
                </div>
              </div>
              <button className="p-3 rounded-xl bg-white hover:bg-gray-100 transition-colors">
                <Phone className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Description */}
            <div className="mb-12">
              <h2 className="font-semibold text-xl text-gray-900 mb-4">
                Description
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                {eventDetails.description}
                <button className="text-orange-500 ml-2 hover:text-orange-600">
                  Read More
                </button>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-6">
              <button className="p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                <Bookmark className="w-6 h-6 text-gray-600" />
              </button>
              <button className="flex-1 bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">
                BUY A TICKET
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="mt-8 pt-8 border-t grid grid-cols-3 gap-4">
              <button className="flex items-center justify-center space-x-3 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <Phone className="w-6 h-6 text-gray-600" />
                <span className="text-gray-600 font-medium">Call</span>
              </button>
              <button className="flex items-center justify-center space-x-3 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <MapPin className="w-6 h-6 text-gray-600" />
                <span className="text-gray-600 font-medium">Directions</span>
              </button>
              <button className="flex items-center justify-center space-x-3 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <MessageCircle className="w-6 h-6 text-gray-600" />
                <span className="text-gray-600 font-medium">Messages</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
