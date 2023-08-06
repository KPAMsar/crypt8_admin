import SearchIcon from "../../../src/assets/Icons/searchIcon.svg";
import UpDownIcon from "../../assets/Icons/searchUpandDownArrow.svg";
import { Modal, Form } from "react-bootstrap";
import ThreeDots from '../../../src/assets/Icons/thress-dots.svg';
import { useState } from "react";
import ReactDOM from "react-dom";

const CryptoCurrencyTransfer = () => {
    const [currency, setCurrency] = useState(0);

    const data = [1, 2, 3, 4, 5];
    return (
        <>
            <div className="p-[66px]">
                <div>
                    <p className=" text-[white] pb-[78px] t-[24px]"> Crypto Currency Transfer</p>
                </div>

                <div className="bg-[#0E0E0E]">
                    <div className="flex justify-between p-[35px]">
                        <p className="text-[white]">Crypto Currency Transfer</p>
                    </div>

                    <div className="flex justify-between p-[35px]  ">
                        <div className="flex text-[#9CFA4A]  gap-4  items-center ">
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

                        <div className="flex  justify-start flex-start rounded-lg gap-2 text-[#9CFA4A]  p-2 px-[100px] border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  ">
                            <img src={SearchIcon} alt="" />
                            Search
                        </div>
                    </div>

                    <table className="table w-full pb-[60px]">
                        <thead className="text-white ">
                            <th>Sn</th>
                            <th>Sender</th>
                            <th>Reciver</th>
                            <th>Details </th>
                            <th>Date</th>
                            
                            
                        </thead>
                        <tbody className="bg-[#0E0E0E]  ">
                            {data.map((items, index) => (
                                <tr
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
                                        15TncP7Ru6drhLqdcQXHY72HFPwk43WGrt
                                    </td>
                                    <td
                                        style={{ border: "none" }}
                                        className="p-[1rem]  text-[red]"
                                    >
                                      Failed
                                    </td>
                                    <td
                                        style={{ border: "none" }}
                                        className="p-[1rem]  text-[#787878]"
                                    >
                                       01/01/2023
                                    </td>
                                    <td
                                        style={{ border: "none" }}
                                        className="p-[1rem]  text-[#9CFA4A]"
                                    >
                                     VIEW MORE
                                    </td>
                                    
                                </tr>
                            ))}{" "}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default CryptoCurrencyTransfer;
