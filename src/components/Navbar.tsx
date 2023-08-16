import NavbarDots from '../../src/assets/Icons/navbarDots.svg';
import NavbarNotification from '../../src/assets/Icons/navbarNotification.svg';
import NavbarPhotoIcon from '../../src/assets/Icons/roundPhotoIcon.png';
import HamburgerIcon from '../../src/assets/Icons/hamburger.svg';
import Logo from '../../src/assets/Icons/logo.svg';
// import { useState } from 'react';


const Navbar = ({ handleSidebar }: { handleSidebar: () => void }) => {


  return (
    <>
    
      <nav className="  w-[100vdw] lg:w-full md:full bg-[#010101] z-10  text-white  sticky top-0 left-0  h-[10px] ">
        <div className="flex justify-between bg-[#010101] h-[80px]">
          <p className="text-white p-[66px]  text-[24px]"></p>
          <div className="flex gap-[20px] items-center pr-[66px]">
         <div className='flex justify-between left-0 absolute'>
         <img src={Logo} alt="" className="block md:hidden xl:hidden w-[130px]  h-[60px] right-0" onClick={handleSidebar} />
         </div>
            <img src={NavbarNotification} alt="" />
            <img src={NavbarPhotoIcon} alt="" />
            <p className=' hidden text-white  md:block'>CRYPT8</p>
            <img src={NavbarDots} alt="" className="hidden md:hidden xl:block " />
            <img src={HamburgerIcon} alt="" className="block md:block lg:hidden xl:hidden w-[100vdw] right-4  absolute " onClick={handleSidebar} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;