import { Plus } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <div className="max-w-277.5 mx-auto">
      <div className="mb-5 md:mb-8 text-center">
        <h2 className="text-5xl font-bold mb-3">
          Friends to keep close in your life
        </h2>
        <p className="mb-3">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white">
          <Plus />
          Add a Friend
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3">
        <div className="text-center shadow p-5">
          <h2 className="text-3xl font-semibold">10</h2>
          <p>Total Friends</p>
        </div>
        <div className="text-center shadow p-5">
          <h2 className="text-3xl font-semibold">3</h2>
          <p>On Track</p>
        </div>
        <div className="text-center shadow p-5">
          <h2 className="text-3xl font-semibold">6</h2>
          <p>Need Attention</p>
        </div>
        <div className="text-center shadow p-5">
          <h2 className="text-3xl font-semibold">12</h2>
          <p>Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
