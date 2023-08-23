import RoundPhotoIcon from "../../assets/Icons/roundPhotoIcon.png";
import SearchIcon from "../../../src/assets/Icons/searchIcon.svg";
import UpDownIcon from "../../assets/Icons/searchUpandDownArrow.svg";
import ModalCloseIcon from "../../../src/assets/Icons/ModalCloseIcon.svg";
import ThreeDots from '../../../src/assets/Icons/thress-dots.svg';
import { useState } from "react";
import React from "react";
import DashboardCryptoCurrency from "./dashboardCryptoCurrency";
import { AiOutlineClose } from "react-icons/ai";

const DashboardDigitalCurrency = () => {
 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initModal = () => {
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };


  const [show,setShow]= useState(false);
  //   [hide,setHide] = useState(false);
  console.log(show)





const data = [1, 2, 3, 4, 5]
return (
  <>
      <div className="lg:mb-[6rem] w-[100dvw] lg:w-[100%] overflow-hidden md:pl-[30px] pr-[10px] pl-[10px] md:pr-[30px] lg:pl-[48px] mt-[100px] lg:mt-[100px] lg:pr-[40px]">
          <div>
              <p className=" text-[white] pb-[78px] text-[20px] font-[600]">Digital Currency List</p>
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
                  <p className="text-[white] text-[20px] ">Digital Currency</p>
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



{/* MODAL */}
<div
                className={` ${isModalOpen
                    ? "fixed top-0 right-0 z-20 h-[100dvh] w-[100dvw] bg-[rgba(210,210,210,0.5)]"
                    : " "
                    } `}
            ></div>

            <div
                className={`h-[100dvh]  items-center w-[95%]   md:w-[500px] rounded-lg lg:h-[854px] lg:w-[749px]  flex justify-center lg:justify-items-end bg-[#010101]  shadow-lg lg:  z-30 lg:backdrop-blur-md backdrop-blur-md fixed top-2 lg:top-4  left-[2.5%] right-[2.5%] lg:right-7 transform ${isModalOpen ? "translate-y-0" : "-translate-y-[-200%] "
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
                            Add Digital Currency
                        </h2>
                        <div className="flex  flex-col gap-4 ">
                            <div className=" bg-[#0E0E0E]  lg:h-[90px]  justify-between flex flex-col justify-item p-4 lg:p-4 gap-3 w-[100%] h-[120px]">
                                <small className=" text-[#666666]  text-[12px] ">
                                    {" "}
                                    Currency Name
                                </small>
                                <p className="text-white text-[20px]">Cash</p>
                            </div>
                            <div className=" bg-[#0E0E0E] justify-between h-[120px] flex flex-col justify-item p-4 lg:p-4 gap-3 w-[100%]">
                                <small className=" text-[#666666]  text-[12px] ">
                                    {" "}
                                    Currecncy Logo
                                </small>



                                <div className='  justify-center'>
                                    <label htmlFor="app" ><input type="file" accept="images/*" id="app" hidden required />
                                        <p className="text-white text-[16px] border w-[110px] border-[#9CFA4A]  p-[7px] rounded-lg">Choose File</p>
                                    </label>


                                </div>
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

export default DashboardDigitalCurrency;
