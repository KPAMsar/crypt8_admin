import { NavLink } from "react-router-dom";
import { links } from "../data/sidebarData";
import LogoImg from '../../src/assets/Icons/logo.svg';


const SideBar = () => {
  const url = window.location.href;
  const splittedUrl = url.split('/');
  // console.log(splittedUrl);
  return (
    <>
      <aside className="bg-[#0E0E0E]  flex-col h-[100%]  w-[272px]">
        <div className="items-center w-[272px] justify-center ">
          <img src={LogoImg} alt="Logo" width="95px" height="65px" />
        </div>
        {links.map((item) => {

          function isActive(path: string) {
            console.log('path name us ',window.location.pathname)
            return window.location.pathname === path;
          }

          return (

            <>
              <div>
                <div className="flex h-[100%] my-[22px] pl-[40px]  gap-4">
                  <NavLink className={`text-white flex gap-3 w-[178px] ${isActive(item.link) ? 'bg-red-500' : ''}`} to={item.link} >
                    {item.icon} <span>{item.title}</span>
                  </NavLink>
                  {/* <p className="text-white text-[16px] w-[168px]"></p> */}
                </div>
              </div>
            </>
          );
        })}
      </aside>
    </>
  );
};
export default SideBar;
