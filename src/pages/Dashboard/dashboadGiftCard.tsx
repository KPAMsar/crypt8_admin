import RoundPhotoIcon from '../../assets/Icons/roundPhotoIcon.png';
import SearchIcon from '../../../src/assets/Icons/searchIcon.svg';
import UpDownIcon from '../../assets/Icons/searchUpandDownArrow.svg';
import ThreeDots from '../../../src/assets/Icons/thress-dots.svg';

import { useState } from 'react';


const DashboadGiftCard = () => {

    const [show,setShow]= useState(false);
    //   [hide,setHide] = useState(false);
    console.log(show)





const data = [1, 2, 3, 4, 5]
return (
    <>
        <div className="lg:mb-[6rem] w-[100dvw] lg:w-[100%] overflow-hidden md:pl-[30px] pr-[10px] pl-[10px] md:pr-[30px] lg:pl-[48px] mt-[100px] lg:mt-[100px] lg:pr-[40px]">
            <div>
                <p className=" text-[white] pb-[78px] text-[20px] font-[600]">Gift Card List</p>
            </div>

            <div className='lg:bg-[#0E0E0E]'>

                <div className='flex justify-between lg:p-[35px] pb-[10px]'>
                    <p className='text-[white]'></p>
                    <p style={{
                        background:
                            "linear-gradient(40deg, #9CFA4A2B 2%, rgba(156, 250, 74, 0.00) 65%) ",
                    }} className='text-[#9CFA4A]  p-2 lg:px-[150px] px-[90px] py-[15px] lg:py-4  border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  ' onClick={ ()=>setShow(true)} >Add Gift Card</p>
                      {/* <label className="btn btn-primary" htmlFor="modal-1">Open Modal</label> */}
                </div>

                <div className="flex justify-between p-[35px] bg-[#0E0E0E] lg:bg-[]">
                    <p className="text-[white] text-[20px] ">Gift Card</p>
                    <div className="flex gap-4 justify-between lg:hidden">
                        <img src={SearchIcon} alt="" />
                        <img src={ThreeDots} alt="" />
                    </div>
                </div>
                
                 <div className='lg:flex justify-between p-[35px] hidden '>
                    <div className='flex text-[#9CFA4A]  gap-4  items-center '>
                    <p>Show</p>
                    <div className='border border-2 border-[#9CFA4A2B] w-[176px] rounded-lg  h-[40px]'>
                        <img src={UpDownIcon} alt="" />
                    </div>
                    <p>Entries</p>
                    </div>

                    <div  className='flex  justify-start flex-start rounded-lg gap-2 text-[#9CFA4A]  p-2 px-[100px] border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  '>
                    <img src={SearchIcon} alt="" /> Search
                    </div>
                </div> 



                <div className='overflow-x-auto'>
                    <table className="table w-full pb-[60px] bg-[#0E0E0E] lg:bg-[]"  >
                        <thead className="text-white ">
                            <th>S/N</th>
                            <th>Logo</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </thead>
                        <tbody className='bg-[#0E0E0E]  '>
                            {data.map((items, index) => (
                                <tr style={{ border: 'none', justifyItems: ' center' }}>
                                    <th style={{ border: 'none', paddingLeft: '3rem' }} className='p-[1rem] '>{index + 1}</th>
                                    <th style={{ border: 'none' }} className='p-[1rem]'><img src={RoundPhotoIcon} alt="" /></th>
                                    <td style={{ border: 'none' }} className='p-[1rem] text-[#787878]'>Kpamsar Shija</td>
                                    <td style={{ border: 'none' }} className='p-[1rem]  text-[#787878]'>Deposited $4230 </td>
                                    <td style={{ border: 'none' }} className='p-[1rem]  text-[#787878]'>
                                        <button className="btn bg-[#9CFA4A2B] text-[#9CFA4A]">Edit</button>
                                    </td>
                                    <td style={{ border: 'none' }} className='p-[1rem]  text-[#787878]'>
                                        <button className="btn bg-[#DA0808] text-[#f0a9a9]">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>





    </>
);
}

export default DashboadGiftCard;