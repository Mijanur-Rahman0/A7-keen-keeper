
import useFriends from "../../hooks/useFriends";
import { useParams } from "react-router";
import {
  Archive,
  BellDot,
  MessageSquareMore,
  Phone,
  Trash,
  Video,
} from "lucide-react";

const FriendDetails = () => {
  const { id } = useParams();
  console.log(id, "id");
  const { friends, loading } = useFriends();

  const expectedFriend = friends.find((friend) => friend.id == id);
  console.log(expectedFriend);

  if(loading){
    return <h2>Loading...</h2>
  }

  return (
    <div className="flex justify-between mb-8 max-w-277.5 mx-auto">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4 text-center">
          <div className="p-6 space-y-2 shadow mb-2">
            <img
              src={expectedFriend.picture}
              alt=""
              className="rounded-full mx-auto"
            />
            <h2>{expectedFriend.name}</h2>
            <p
              className={`px-3 py-1 rounded-full text-white w-fit mx-auto ${
                expectedFriend.status === "overdue"
                  ? "bg-red-500"
                  : expectedFriend.status === "almost due"
                    ? "bg-yellow-500"
                    : "bg-green-500"
              }`}
            >
              {expectedFriend.status}
            </p>
            <div className="">
              {expectedFriend.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#74e8c1] font-medium md:px-2 rounded-full p-1 mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p>{expectedFriend.bio}</p>
            <p>{expectedFriend.email}</p>
          </div>
          <div className="flex flex-col">
            <button className="btn">
              <BellDot />
              Snooze 2 Weeks
            </button>
            <button className="btn">
              <Archive />
              Archive
            </button>
            <button className="btn">
              <Trash />
              Delete
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 shadow text-center">
              <h2 className="text-4xl font-semibold">
                {expectedFriend.days_since_contact}
              </h2>
              <p>Days Since Contact</p>
            </div>
            <div className="p-4 shadow text-center">
              <h2 className="text-4xl font-semibold">{expectedFriend.goal}</h2>
              <p>Goal (Days)</p>
            </div>
            <div className="p-4 shadow text-center">
              <h2 className="text-4xl font-semibold">
                {expectedFriend.next_due_date}
              </h2>
              <p>Next Due</p>
            </div>
          </div>

          <div className="flex justify-between shadow p-5">
            <div className="space-y-3">
              <h3 className="font-medium">Relationship Goal</h3>
              <p>
                Connect every{" "}
                <span className="font-semibold">
                  {expectedFriend.goal} days
                </span>
              </p>
            </div>
            <button className="btn">Edit</button>
          </div>

          <div>
            <h3>Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center justify-center p-4 shadow">
                <Phone />
                Call
              </button>
              <button className="flex flex-col items-center justify-center p-4 shadow">
                <MessageSquareMore />
                Text
              </button>
              <button className="flex flex-col items-center justify-center p-4 shadow">
                <Video />
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;