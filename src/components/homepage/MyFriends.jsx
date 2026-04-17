import React, { useEffect, useState } from "react";

const MyFriends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      console.log(data);
      setFriends(data);
    };
    fetchData();
  }, []);

  console.log(friends, "friends");

  return (
    <div className="max-w-277.5 mx-auto">
      <h4 className="text-xl font-semibold mb-3">Your Friends</h4>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friends.map((friend, id) => {
            return (
              <div
                key={id}
                className="card bg-base-100 shadow-sm text-center"
              >
                <figure>
                  <img
                    src={friend.picture}
                    alt="Shoes"
                    className="rounded-full"
                  />
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyFriends;
