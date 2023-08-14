import SearchIcon from "../../../src/assets/Icons/searchIcon.svg";
import UpDownIcon from "../../assets/Icons/searchUpandDownArrow.svg";
import { Modal, Form } from "react-bootstrap";
import ThreeDots from '../../../src/assets/Icons/thress-dots.svg';
import { useState } from "react";


const Deposite = () => {
    const [currency, setCurrency] = useState(0);

    const data = [1, 2, 3, 4, 5];
    return (
        <>
            <div className="lg:mb-[6rem] w-[100dvw] lg:w-[100%] overflow-hidden md:pl-[30px] pr-[30px] pl-[20px] md:pr-[30px] lg:pl-[48px] mt-[100px] lg:mt-[100px] lg:pr-[40px]" >
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
                                className={` min-w-[60px] rounded-lg text-center py-[4px] px-[3px]   ${currency === 0 ? "bg-[#9CFA4A]" : ""
                                    } 
                   `}
                                onClick={() => setCurrency(0)}
                            >
                                BTC
                            </p>
                            <p
                                className={` min-w-[60px] rounded-lg text-center py-[4px] px-[3px] ${currency === 1 ? "bg-[#9CFA4A]" : ""
                                    }  `}
                                onClick={() => setCurrency(1)}
                            >
                                USDT
                            </p>
                            <p
                                className={` min-w-[60px] rounded-lg text-center py-[4px] px-[2px]   ${currency === 2 ? "bg-[#9CFA4A]" : ""
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
                                    </tr>
                                ))}{" "}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Deposite;
