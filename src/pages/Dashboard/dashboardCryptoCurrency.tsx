import RoundPhotoIcon from '../../assets/Icons/roundPhotoIcon.png';
import SearchIcon from '../../../src/assets/Icons/searchIcon.svg';
import UpDownIcon from '../../assets/Icons/searchUpandDownArrow.svg';

import { useState } from 'react';


const DashboardCryptoCurrency = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        console.log(isModalOpen)
        setIsModalOpen((prev) => !prev);
      };

    const data = [1, 2, 3, 4, 5]
    return (
        <>
            <div className="p-[66px]">
                <div>
                    <p className=" text-[white] pb-[78px]">All Crypto Currency</p>
                </div>

                <div className='bg-[#0E0E0E]'>

                    <div className='flex justify-between p-[35px]'>
                        <p className='text-[white]'>All Crypto Currency</p>
                        <p style={{
                            background:
                                "linear-gradient(40deg, #9CFA4A2B 2%, rgba(156, 250, 74, 0.00) 65%) ",
                        }} className='text-[#9CFA4A]  p-2 px-[150px] py-4  border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  ' onClick={toggleModal} >Add Gift Card</p>
                          {/* <label className="btn btn-primary" htmlFor="modal-1">Open Modal</label> */}
                    </div>

                    
                     <div className='flex justify-between p-[35px] '>
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



                    <table className="table w-full pb-[60px]"  >
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




    
    
        </>
    );
}

export default DashboardCryptoCurrency;