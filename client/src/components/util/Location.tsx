interface LocationProps {
  data: {
    name: string;
    image: string;
  };
}

const Location: React.FC<LocationProps> = ({ data }) => {
  const { name, image } = data;

  return (
    <div className="w-40 h-14 m-2 shadow-lg border flex items-center rounded-lg">
      <img src={image} alt="event" className="rounded-lg w-10 h-10 m-2" />
      <p className="font-bold text-gray-500">{name}</p>
    </div>
  );
};

export default Location;
