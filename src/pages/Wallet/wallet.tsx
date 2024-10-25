import SearchIcon from "../../../src/assets/Icons/searchIcon.svg";
import UpDownIcon from "../../assets/Icons/searchUpandDownArrow.svg";
import { Modal, Form } from "react-bootstrap";
import ThreeDots from '../../../src/assets/Icons/thress-dots.svg';
import { useState } from "react";

const Wallet = () => {
    const [currency, setCurrency] = useState(0);

    const data = [1, 2, 3, 4, 5];
    return (
        <>
            <div className="lg:mb-[6rem] w-[100dvw] lg:w-[100%] overflow-hidden md:pl-[30px] pr-[10px] pl-[10px] md:pr-[30px] lg:pl-[48px] mt-[100px] lg:mt-[100px] lg:pr-[40px]">
                <div>
                    <p className=" text-[white] lg:pb-[78px] text-[24px] hidden lg:block">Wallet</p>
                </div>

                <div className="bg-[#0E0E0E]">
                    <div className="flex justify-between p-[35px]">
                        <p className="text-[white]">Wallet</p>
                        <div className="flex gap-4 justify-between lg:hidden">
                            <img src={SearchIcon} alt="" />
                            <img src={ThreeDots} alt="" />
                        </div>
                    </div>

                    <div className=" lg:flex lg:justify-between lg:p-[35px] py-[30px]   ">
                        <div className="lg:flex text-[#9CFA4A] hidden  gap-4  items-center ">
                            <p>Show</p>
                            <div className="border border-2 border-[#9CFA4A2B] w-[176px] rounded-lg  h-[40px]">
                                <img src={UpDownIcon} alt="" />
                            </div>
                            <p>Entries</p>
                        </div>

                        <div className="flex text-white lg:gap-6    bg-[RGB(35,31,32)] lg:max-h-[40px] lg:p-3 lg:px-4 items-center rounded-[8px] ">
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

                        <div className="lg:flex   lg:justify-start lg:flex-start rounded-lg lg:gap-2 text-[#9CFA4A] hidden  lg:p-2 lg:px-[100px] border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  ">
                            <img src={SearchIcon} alt="" />
                            Search
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="table w-full pb-[60px]">
                            <thead className="text-white ">
                                <th className="min-w-[50px]">Sn</th>
                                <th className="min-w-[150px]">Wallet</th>
                                <th className="min-w-[150px]">No. of Deposits</th>
                                <th className="min-w-[100px]">Balance</th>
                                <th className="min-w-[100px]">View</th>
                                <th className="min-w-[100px]">Transfer</th>
                        
                            </thead>
                            <tbody className="bg-[#0E0E0E]  ">
                                {data.map((item, index) => (
                                    <tr
                                    key={item}
                                        style={{
                                            border: "none",
                                            justifyItems: " center",
                                        }}
                                    >
                        
                        
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem] text-[#787878]"
                                        >
                                            {index + 1}
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem] text-[#787878]"
                                        >
                                            15TncP7Ru6drhLqdcQXHY72HFPwk43WGrt
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878]"
                                        >
                                            0
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878]"
                                        >
                                          0
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878]"
                                        >
                                            <button className="btn bg-[#9CFA4A2B] text-[#9CFA4A]">
                                                View
                                            </button>
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#9CFA4A]"
                                        >
                                          Coin Transfer
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

export default Wallet;
