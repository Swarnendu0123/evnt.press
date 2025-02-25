import { Link } from "react-router-dom";

interface LocationProps {
  data: {
    name: string;
    image: string;
  };
}

const LocationCard: React.FC<LocationProps> = ({ data }) => {
  const { name, image } = data;

  return (
    <Link to={`/location/${name}`}>
      <div className="border border-white  hover:border-gray-100 w-40 h-14 m-2 shadow-lg flex items-center rounded-lg">
        <img src={image} alt="event" className="rounded-lg w-10 h-10 m-2" />
        <p className="font-bold text-gray-500">{name}</p>
      </div>
    </Link>
  );
};

export default LocationCard;
