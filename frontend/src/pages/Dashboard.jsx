import Leaderboard from "../components/Leaderboard";
import Topbar from "../components/Topbar";
import Rewards from "../components/Rewards";
import Sidebar from "../components/Sidebar";
const Dashboard = () => {
  return (
    <main className=" w-[90%] min-h-screen m-auto  bg-gray-100 text-gray-800 ">
      <nav
        className="top-bar   m-auto h-fit p-1 mt-2 border-gray-400 text-black
         shadow-lg bg-white rounded-2xl"
      >
        <Topbar />
      </nav>

   <div className="flex gap-5.5 w-[100%]">
       <div className="side-bar w-[23%]  overflow-hidden   border-gray-200  rounded-lg">
        <Sidebar />
        <Rewards />
      </div>
      <div className="w-[75%]  m-auto">
        <Leaderboard />
      </div>
   </div>
    </main>
  );
};

export default Dashboard;
