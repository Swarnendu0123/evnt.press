import { Link } from "react-router-dom";

const Avatar = () => {
  return (
    <div className="mx-3">
      <Link to="/profile">
        <img
          src="https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947"
          alt="avatar"
          className="h-10 w-10 rounded-full"
        />
      </Link>
    </div>
  );
};

export default Avatar;
