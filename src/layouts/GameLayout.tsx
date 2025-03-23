import { Outlet } from "@tanstack/react-router";
import Navbar from "../components/atoms/Navbar";

const GameLayout = () => {
  return (
    <div className="relative w-full">
      <div className="relative z-10 flex flex-col h-full">
        <Navbar />
        <div className="flex-1 relative z-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GameLayout;
