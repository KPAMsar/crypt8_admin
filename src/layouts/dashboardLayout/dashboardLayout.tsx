import Navbar from "./../../components/Navbar";
import SideBar from "./../../components/Sidebar";
import { Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";


const DashboardLayout = ({ sideBarOpen, handleSidebar }: { sideBarOpen: boolean; handleSidebar: () => void }) => {

  //  console.log(sideBarOpen)
 

  return (
    <>
    <div className={` ${sideBarOpen? "fixed top-0 right-0 z-20 h-[100dvh] w-[100dvw] bg-[rgba(58,54,54,0.5)]"
: ""
} `} onClick={handleSidebar}>

</div>
      <div className="flex relative bg-[#0E0E0E] h-[100dvh] overflow-y-hidden">
        <div
          className={`w-[276px] bg-[#0E0E0E] overflow-y-auto  h-screen fixed z-50 top-0 left-0 transition-[transform] ${sideBarOpen ? "translate-x-0" : "translate-x-[-100%]"
            } lg:relative lg:translate-x-0 lg:block`}




        >
          <SideBar  handleSidebar={handleSidebar} />

        </div>

        <div className="bg-[#010101] lg:w-[calc(100dvw-276px)] relative">
          <div className="h-full relative bg-[#010101] rounded-tr-lg rounded-tl-[20px]  overflow-auto">
            <Navbar handleSidebar={handleSidebar} />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
