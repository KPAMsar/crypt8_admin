import { NavLink } from "react-router-dom";
import { links } from "../data/sidebarData";
import LogoImg from '../../src/assets/Icons/logo.svg';
import { useState } from "react";
import { useLocation } from "react-router-dom";




const SideBar = () => {
 

  const [active, setActive] = useState('');



  const location = useLocation();

  console.log('the active tab is ', active)
  console.log('the act ', location.pathname)
  if (active === location.pathname) {
    console.log('the active tab is ', active)
  }



  return (
    <>
      
      <aside className="bg-[#0E0E0E]  flex-col h-[100%]  w-[272px] ">
        <div className="items-center w-[272px] justify-center ">
          <img src={LogoImg} alt="Logo" width="95px" height="65px" />
        </div>
        {links.map((item) => {


          return (

            <>
              <div>

                <div className="flex h-[100%] my-[22px] pl-[40px]  gap-4">

                  <NavLink className={`text-white flex gap-3 w-[178px]  ${active === item.link ? 'bg-[#9CFA4A]  text-[black] ' : ' '} h-[40px] items-center rounded-sm px-[10px]  py-[12px]`} to={item.link} onClick={() => {setActive(item.link); }}>
                    <span style={{ color:'black'}}>{item.icon}</span> <span>{item.title}</span>
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
