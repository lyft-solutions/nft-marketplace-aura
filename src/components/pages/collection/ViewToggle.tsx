import { Grid, LayoutList, LayoutGrid } from "lucide-react";
import { useNFTStore } from "@/store/nfsStore";

const ViewToggle = () => {
  const { viewMode, setViewMode } = useNFTStore();

  return (
    <div className="flex bg-[#1c1c28] rounded-[5px] overflow-hidden w-fit">
      <button
        className={`py-2 px-3 rounded-l-[5px] ${
          viewMode === "list" ? "bg-purple-600" : "hover:bg-[#2d2d3d]"
        }`}
        onClick={() => setViewMode("list")}
        title="List view"
      >
        <LayoutList className="w-5 h-5" />
      </button>

      <button
        className={`py-2 px-3 ${
          viewMode === "small-grid" ? "bg-purple-600" : "hover:bg-[#2d2d3d]"
        }`}
        onClick={() => setViewMode("small-grid")}
        title="Small grid view"
      >
        <Grid className="w-5 h-5" />
      </button>

      <button
        className={`py-2 px-3 rounded-r-[5px] ${
          viewMode === "grid" ? "bg-purple-600" : "hover:bg-[#2d2d3d]"
        }`}
        onClick={() => setViewMode("grid")}
        title="Grid view"
      >
        <LayoutGrid className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ViewToggle;
