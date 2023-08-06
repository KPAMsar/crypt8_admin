// import Navbar from "./../../components/Navbar";
import SideBar from "./../../components/Sidebar";
import { Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";


const DashboardLayout = ({ sideBarOpen }: { sideBarOpen: boolean }) => {



  // console.log(sideBarOpen)
  return (
    <>
      <div className="flex relative bg-[#0E0E0E] h-[100dvh] overflow-y-hidden">
        <div
          className={`w-[276px] bg-[#0E0E0E] overflow-y-auto  h-screen fixed z-50 top-0 left-0 transition-[transform] ${
            sideBarOpen ? "translate-x-0" : "translate-x-[-100%]"
          } lg:relative lg:translate-x-0 lg:block`}

          // className={`w-[276px] bg-[#0E0E0E] overflow-y-auto h-screen fixed z-50 top-0 left-0 transition-transform translate-x-${sideBarOpen ? "0%" : "-100%"} lg:relative lg:translate-x-0 lg:block`}


        >
          <SideBar  />
        </div>

        <div className="bg-[#010101] lg:w-[calc(100dvw-276px)] overflow-x-auto">
          <div className="h-full bg-[#010101] rounded-tr-lg rounded-tl-[20px]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
