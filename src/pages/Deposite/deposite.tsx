import SearchIcon from "../../../src/assets/Icons/searchIcon.svg";
import UpDownIcon from "../../assets/Icons/searchUpandDownArrow.svg";
import { Modal, Form } from "react-bootstrap";
import ThreeDots from '../../../src/assets/Icons/thress-dots.svg';
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";


const Deposite = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const initModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const [currency, setCurrency] = useState(0);

    const data = [1, 2, 3, 4, 5];
    return (
        <>
            <div className="lg:mb-[6rem] w-[100dvw] lg:w-[100%] overflow-hidden md:pl-[30px] pr-[10px] pl-[10px] md:pr-[30px] lg:pl-[48px] mt-[100px] lg:mt-[100px] lg:pr-[40px]" >
                <div>
                    <p className=" text-[white] pb-[78px] text-[24px]">Deposite</p>
                </div>

                <div className="bg-[#0E0E0E]">
                    <div className="flex justify-between p-[35px]">
                        <p className="text-[white]">All Deposite</p>
                        <div className=" lg:hidden flex justify-between gap-[24px]">
                            <img src={SearchIcon} alt="" />
                            <img src={ThreeDots} alt="" />
                        </div>
                    </div>

                    <div className="flex justify-between p-[35px]  ">
                        <div className="lg:flex hidden text-[#9CFA4A]  gap-4  items-center ">
                            <p>Show</p>
                            <div className="border border-2 border-[#9CFA4A2B] w-[176px] rounded-lg  h-[40px]">
                                <img src={UpDownIcon} alt="" />
                            </div>
                            <p>Entries</p>
                        </div>

                        <div className="flex text-white gap-6  bg-[RGB(35,31,32)] max-h-[40px] p-3 PX-4 items-center rounded-[8px]">
                            <p
                                className={` min-w-[60px] rounded-lg text-center py-[4px] px-[3px]   ${currency === 0 ? "bg-[#9CFA4A] text-[black]" : ""
                                    } 
                   `}
                                onClick={() => setCurrency(0)}
                            >
                                BTC
                            </p>
                            <p
                                className={` min-w-[60px] rounded-lg text-center py-[4px] px-[3px] ${currency === 1 ? "bg-[#9CFA4A] text-[black]" : ""
                                    }  `}
                                onClick={() => setCurrency(1)}
                            >
                                USDT
                            </p>
                            <p
                                className={` min-w-[60px] rounded-lg text-center py-[4px] px-[2px]   ${currency === 2 ? "bg-[#9CFA4A] text-[black] text-[500]`" : ""
                                    } `}
                                onClick={() => setCurrency(2)}
                            >
                                ETH
                            </p>
                        </div>

                        <div className="lg:flex hidden lg:justify-start lg:flex-start lg:rounded-lg lg:gap-2 text-[#9CFA4A]  lg:p-2 lg:px-[100px] lg:border border-1 lg:border-[#9CFA4A2B]   bg-[#9CFA4A2B]  ">
                            <img src={SearchIcon} alt="" />
                            Search
                        </div>
                    </div>

                    <div className="overflow-x-auto ">
                        <table className="table w-[100dvw] overflow-hidden  lg:w-full    lg:pb-[60px]">
                            <thead className="text-white  ">
                                <th className="min-w-[120px]">User</th>
                                <th className="min-w-[120px]">Amount</th>
                                <th className="min-w-[120px]">Rate</th>
                                <th className="min-w-[120px]">Confirmation</th>
                                <th className="min-w-[120px]">Dollar Value</th>
                                <th className="min-w-[120px]">Date</th>
                                <th className="min-w-[120px]">Status</th>
                                <th className="min-w-[120px]"></th>
                            </thead>
                            <tbody className="bg-[#0E0E0E]  ">
                                {data.map((item) => (
                                    <tr key={item}
                                        style={{
                                            border: "none",
                                            justifyItems: " center",
                                        }}
                                    >
                        
                        
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem] text-[#787878]"
                                        >
                                            Crypt 8
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem] text-[#787878]"
                                        >
                                            0.00811351
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878]"
                                        >
                                            570
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878]"
                                        >
                                            <button className="btn bg-[#9CFA4A2B] text-[#9CFA4A]">
                                                3
                                            </button>
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878]"
                                        >
                                           $299.02
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878]"
                                        >
                                           01/01/2023
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878] flex justify-between"
                                        >
                                            <button className="btn bg-[#9CFA4A2B] text-[#9CFA4A]">
                                                Approved
                                            </button>
                        
                                        </td>
                                        <td onClick={initModal} style={{ border: "none" }}><img src={ThreeDots} alt="" /></td>
                                    </tr>
                                ))}{" "}
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
};

export default Deposite;
