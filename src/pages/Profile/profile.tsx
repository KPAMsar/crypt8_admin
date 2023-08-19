// import RoundPhotoIcon from '../../assets/Icons/roundPhotoIcon.png';
import { useState } from 'react';
import SearchIcon from '../../../src/assets/Icons/searchIcon.svg';
import ModalCloseIcon from "../../../src/assets/Icons/ModalCloseIcon.svg";
import { AiOutlineClose } from "react-icons/ai";




const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const initModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const data = [1, 2, 3, 4, 5,6,6,6,6,6,6,6,6]
    return (
        <>
            <div className=" lg:mb-[6rem] w-[100dvw] lg:w-[100%] overflow-hidden md:pl-[30px] pr-[5px] pl-[5px] md:pr-[30px] lg:pl-[48px] mt-[100px] lg:mt-[100px] lg:pr-[40px]" >

                <div>
                    <p className=" lg:pr-[66px]  text-[24px] text-[white] lg:pb-[78px] lg:text-[24px] hidden  md:block md: mb-[20px] lg:block">Profile</p>
                </div>

                <div className='flex justify-between  pb-7'>
                    <div className='border border-none bg-[#0E0E0E] w-[670px] rounded-lg h-[60px] items-center  md:flex lg:flex justify-between hidden  '>
                        <p className='text-[#9C9696] justify-center items-center pl-3'>Search Bookings</p>
                        <div className='items-center'>
                            <img src={SearchIcon} alt="" className='items-center pr-3' />
                        </div>
                    </div>
                    <p></p>
                    <p style={{
                        background:
                            "linear-gradient(40deg, #9CFA4A2B 2%, rgba(156, 250, 74, 0.00) 65%) ",
                    }} className='text-[#9CFA4A] lg:p-2 flex justify-end px-[40px] lg:px-[150px] py-3 lg:py-4  items-end border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B] ' onClick={initModal}>Add Profile</p>
                </div>

                <div className='bg-[#0E0E0E] '>

                    <div>
                        <p className=" lg:hidden text-[white]  lg:pb-[78px] pl-[40px] pt-[40px] text-[24px]">Profile</p>
                    </div>


                    <div className='overflow-x-auto overflow-y-auto'>
                        <table className="table min-w-[700px] min-h-[90px] pb-[60px] pt-[56px] mt-[56px] transform "  >
                            <thead className="text-white ">
                                <th className='min-w-[100px]'>First Name</th>
                                <th className='min-w-[100px]'>Last Name</th>
                                <th className='min-w-[100px]'>Email </th>
                                <th className='min-w-[100px]'>Phone Number</th>
                                <th className='min-w-[100px]'>Role</th>
                            </thead>
                            <tbody className='overflow-x-auto'>
                                {data.map((item) => (
                                    <tr key={item} style={{ border: 'none', justifyItems: ' center' }} className='text-center min-w-[120px]'>
                                        <td style={{ border: 'none' }} className='p-[1rem] text-center text-[#787878]'>Fazak Crypt8 Fazak</td>
                                        <td style={{ border: 'none' }} className='p-[1rem]  text-[#787878]'>Fazak </td>
                                        <td style={{ border: 'none' }} className='p-[1rem]  text-[#787878]'>Fazak </td>
                                        <td style={{ border: 'none' }} className='p-[1rem]  text-[#787878]'>Fazak </td>
                                        <td style={{ border: 'none' }} className='p-[1rem]  text-[#787878]'>Fazak </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            {/* MODAL */}
            <div
                className={` ${isModalOpen
                    ? "fixed top-0 right-0 z-20 h-[100dvh] w-[100dvw] bg-[rgba(210,210,210,0.5)]"
                    : " "
                    } `}
            ></div>

            <div
                className={`h-[100dvh]  items-center w-[95%]  md:w-[500px] rounded-lg lg:h-[854px] lg:w-[749px]  flex justify-center lg:justify-items-end bg-[#010101]  shadow-lg z-30 lg:backdrop-blur-md backdrop-blur-md fixed top-2 lg:top-4  left-[2.5%] right-[2.5%] lg:right-7 transform ${isModalOpen ? "translate-y-0" : "-translate-y-[-200%] "
                    } transition-transform duration-300 ease-in-out pb-[30px]`}
            >
                {/* modal content goes here */}
                <div className="p-3 w-full">
                    <div
                        className="flex  justify-between pl-[40px] lg:pl-[32rem]"
                        onClick={closeModal}
                    >

                        {/* <img src={ModalCloseIcon} alt="" /> */}
                        <AiOutlineClose className=" text-[30px] items-end text-[#9CFA4A] font-[700] absolute top-[20px] right-[30px]" />
                    </div>
                    <div>
                        <h2 className=" text-[#FFFFFF]  text-[24px] text-center pt-[40px] pb-[50px]">
                            Add Gift Card
                        </h2>
                        <div className="flex  flex-col gap-4 ">
                            <div className=" bg-[#0E0E0E] h-[80px] lg:h-[90px] flex flex-col justify-item p-4 lg:p-4 gap-3 w-[100%]">
                                <small className=" text-[#666666]  text-[12px] ">
                                    {" "}
                                    First Name
                                </small>
                                <p className="text-white text-[16px]">Cash</p>
                            </div>
                            <div className=" bg-[#0E0E0E] h-[80px] lg:h-[90px] flex flex-col justify-item p-4 lg:p-4 gap-3 w-[100%]">
                                <small className=" text-[#666666]  text-[12px] ">
                                    {" "}
                                    First Name
                                </small>
                                <p className="text-white text-[16px]">Cash</p>
                            </div>
                            <div className=" bg-[#0E0E0E] h-[80px] lg:h-[90px] flex flex-col justify-item p-4 lg:p-4 gap-3 w-[100%]">
                                <small className=" text-[#666666]  text-[12px] ">
                                    {" "}
                                    First Name
                                </small>
                                <p className="text-white text-[16px]">Cash</p>
                            </div>
                            <div className=" bg-[#0E0E0E] h-[80px] lg:h-[90px] flex flex-col justify-item p-4 lg:p-4 gap-3 w-[100%]">
                                <small className=" text-[#666666]  text-[12px] ">
                                    {" "}
                                    First Name
                                </small>
                                <p className="text-white text-[16px]">Cash</p>
                            </div>
                            <div className=" bg-[#0E0E0E] h-[80px] lg:h-[90px] flex flex-col justify-item p-4 lg:p-4 gap-3 w-[100%]">
                                <small className=" text-[#666666]  text-[12px] ">
                                    {" "}
                                    First Name
                                </small>
                                <p className="text-white text-[16px]">Cash</p>
                            </div>
                          
                        
                            <p
                                style={{
                                    background:
                                        "linear-gradient(40deg, #9CFA4A2B 2%, rgba(156, 250, 74, 0.00) 65%) ",
                                }}
                                className="text-[#9CFA4A]  p-2 px-[100px] py-4  border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  text-center "
                                onClick={initModal}
                            >
                                Save
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Profile;