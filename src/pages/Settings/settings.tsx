import SettingsPhotoImg from '../../../src/assets/images/settingPhoto.png';
import PhotoIcon from '../../../src/assets/Icons/settingsPhotoIcon.svg';

const Settings = () => {
  return (
    <>
      <div className=" pl-[40px] pr-[40px] pt-[60px] w-full">
          <p  className="text-[20px] text-white"> Settings</p>
          <div>
            <div className=" flex flex-col justify-center items-center">
                <img src={ SettingsPhotoImg} className="w-[90px] h-[90px]" alt="" />
                <p className='text-white text-[24px] '>Crypt8</p>
            </div>
            <div className='bg-[#0E0E0E] w-[419px] h-[70px]  flex  gap-4 items-center pl-[30px] mb-[25px]'>
              <img src={PhotoIcon} alt=""  className='w-[22px] h-[22px]'/>
              <p className='text-white'>Profile</p>
            </div>
            <div className='bg-[#0E0E0E] w-[419px] h-[70px]  flex  gap-4 items-center pl-[30px] mb-[25px]'>
              <img src={PhotoIcon} alt=""  className='w-[22px] h-[22px]'/>
              <p className='text-white'>Account Manager</p>
            </div>
            <div className='bg-[#0E0E0E] w-[419px] h-[70px]  flex  gap-4 items-center pl-[30px] mb-[25px]'>
              <img src={PhotoIcon} alt=""  className='w-[22px] h-[22px]'/>
              <p className='text-white'>PIN  and Sercurity</p>
            </div>
            <div className='bg-[#0E0E0E] w-[419px] h-[70px]  flex  gap-4 items-center pl-[30px] mb-[25px]'>
              <img src={PhotoIcon} alt=""  className='w-[22px] h-[22px]'/>
              <p className='text-white'>Gift Card Rates</p>
            </div>
            <div className='bg-[#0E0E0E] w-[419px] h-[70px]  flex  gap-4 items-center pl-[30px] mb-[25px]'>
              <img src={PhotoIcon} alt=""  className='w-[22px] h-[22px]'/>
              <p className='text-white'>Fiat Currency Rate</p>
            </div>
            <div className='bg-[#0E0E0E] w-[419px] h-[70px]  flex  gap-4 items-center pl-[30px] mb-[25px]'>
              <img src={PhotoIcon} alt=""  className='w-[22px] h-[22px]'/>
              <p className='text-white'>Crytpo Currency Rate</p>
            </div>
            <div className='bg-[#0E0E0E] w-[419px] h-[70px]  flex  gap-4 items-center pl-[30px] mb-[25px]'>
              <img src={PhotoIcon} alt=""  className='w-[22px] h-[22px]'/>
              <p className='text-white'>Digital Currency Rate</p>
            </div>
            <div className='bg-[#0E0E0E] w-[419px] h-[70px]  flex  gap-4 items-center pl-[30px] mb-[25px]'>
              <img src={PhotoIcon} alt=""  className='w-[22px] h-[22px]'/>
              <p className='text-white'>Loguout</p>
            </div>
            
          </div>
      </div>
    </>
  );
};
export default Settings;
