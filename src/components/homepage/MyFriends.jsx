import { Loader } from "lucide-react";
import useFriends from "../../hooks/useFriends";
import FriendCard from "../ui/FriendCard";

const MyFriends = () => {

    const {friends, loading} = useFriends();
    // console.log(friends, 'use hooks');


  return (
    <div className="max-w-277.5 mx-auto mb-10">
      <h4 className="text-xl font-semibold mb-3 p-2">Your Friends</h4>
      <div>
        {loading ? (<div className="flex justify-center items-center"><Loader/></div>) : (<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 shadow-md">
          {friends.map((friend, id) => {
            return (
              <FriendCard friend={friend} key={id}/>
            );
          })}
        </div>)}
      </div>
    </div>
  );
};

export default MyFriends;
