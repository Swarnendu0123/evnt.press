const Footer = () => {
  return (
    <div className="flex mt-10 justify-between">
      <div className=" text-left">
        <span className="text-2xl font-bold text-gray-500">Evnt.press</span>
        <hr />
        <p className="text-gray-500">Explore Events, that excites you!</p>
      </div>

      <div className="text-right">
        <h2 className="font-bold text-gray-500">Contact Us</h2>
        <hr />
        <ul className="text-gray-500">
          <li>
            <a href="mailto:admin@evnt.press" className="text-gray-500">
              admin@evnt.press
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
