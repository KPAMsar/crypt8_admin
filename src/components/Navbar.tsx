import NavbarDots from '../../src/assets/Icons/navbarDots.svg';
import NavbarNotification from '../../src/assets/Icons/navbarNotification.svg';
import NavbarPhotoIcon from '../../src/assets/Icons/roundPhotoIcon.png';
import HamburgerIcon from '../../src/assets/Icons/hamburger.svg';
import { useState } from 'react';


const Navbar = ({name})=>{
  const [navOpen, setOpenNav] = useState(true);

  const handleBurgerClick = ()=>{
    setOpenNav(!navOpen);
    console.log(navOpen)

  }
  
    return (
      <>
        <nav className="h-[10px] w-full  text-white  "> 
          <div className="flex justify-between"> 
              <p className="text-white p-[66px] text-[24px]">{name} </p>
              <div className="flex gap-[20px] items-center pr-[66px]">
                <img src={NavbarNotification} alt="" />
                <img src={NavbarPhotoIcon} alt="" />
                <p className=' hidden text-white  md:block'>CRYPT8</p>
                <img src={NavbarDots} alt="" className="hidden md:hidden xl:block "/>
                <img src={HamburgerIcon} alt=""  className="sm:block md:block xl:hidden"  onClick={handleBurgerClick} />
              </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar;