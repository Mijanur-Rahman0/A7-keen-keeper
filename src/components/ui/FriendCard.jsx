import React from "react";
import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  return (
    <Link to={`/${friend.id}`} className="card bg-base-100 shadow-sm text-center">
      <figure>
        <img src={friend.picture} alt="Shoes" className="rounded-full" />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-bold">{friend.name}</h2>
        <p>{friend.days_since_contact}d ago</p>
        <div className="">
          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#74e8c1] font-medium md:px-2 rounded-full p-1 mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <p
          className={`px-3 py-1 rounded-full text-white w-fit mx-auto ${
            friend.status === "overdue"
              ? "bg-red-500"
              : friend.status === "almost due"
                ? "bg-yellow-500"
                : "bg-green-500"
          }`}
        >
          {friend.status}
        </p>
      </div>
    </Link>
  );
};

export default FriendCard;
