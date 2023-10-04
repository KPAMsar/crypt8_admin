import SearchIcon from "../../../src/assets/Icons/searchIcon.svg";
import UpDownIcon from "../../assets/Icons/searchUpandDownArrow.svg";
import ThreeDots from '../../../src/assets/Icons/thress-dots.svg';
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Pagination } from "../../components/pagination";

const Transactions = () => {
    const [currency, setCurrency] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rotate, setRotate] = useState(false);
    
    const handlePageChange = (page) => {
        setCurrentPage(page);
        
    }
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);


    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = allUsers?.slice(firstPostIndex, lastPostIndex);


    const initModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const fetchAllTransactions = async () => {
        setRotate(true);
        try {
            const { users } = await getAllUsers();
            setAllUsers(users)
            console.log('this is data', users);
        }
        catch (error) {
            console.log('errir', error);
        }
        finally {
            setRotate(false);
        }
    }

    const data = [1, 2, 3, 4, 5];
    return (
        <>
            <div className="lg:mb-[6rem] w-[100dvw] lg:w-[100%] overflow-hidden md:pl-[30px] pr-[10px] pl-[10px] md:pr-[30px] lg:pl-[48px] mt-[100px] lg:mt-[100px] lg:pr-[40px]">
                <div>
                    <p className=" text-[white] hidden lg:block pb-[78px] text-[24px]">Transactions</p>
                </div>

                <div className="bg-[#0E0E0E]">
                    <div className="flex justify-between p-[35px]">
                        <p className="text-[white]">All Transactions</p>
                        <div className="flex gap-4 justify-between lg:hidden">
                            <img src={SearchIcon} alt="" />
                            <img src={ThreeDots} alt="" />
                        </div>
                    </div>

                    <div className="lg:flex justify-between p-[35px] hidden  ">
                        <div className="flex text-[#9CFA4A]  gap-4  items-center ">
                            <p>Show</p>
                            <div className="border border-2 border-[#9CFA4A2B] w-[176px] rounded-lg  h-[40px]">
                                <img src={UpDownIcon} alt="" />
                            </div>
                            <p>Entries</p>
                        </div>

                       

                        <div className="flex  justify-start flex-start rounded-lg gap-2 text-[#9CFA4A]  p-2 px-[100px] border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  ">
                            <img src={SearchIcon} alt="" />
                            Search
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="table w-full  min-w-[500px] pb-[60px]">
                            <thead className="text-white ">
                                <th>User</th>
                                <th>Bank</th>
                                <th>Account Name</th>
                                <th>Account Number</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                            </thead>
                            <tbody className="bg-[#0E0E0E]  ">
                                {data.map((item) => (
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
                                            Crypt 8
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem] text-[#787878]"
                                        >
                                            Zenith Bank
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878]"
                                        >
                                            Jagaban Obiora
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878]"
                                        >
                                            909338790
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

                {!rotate && <div className="flex justify-center mt-[10px]">
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={allUsers.length}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                />
            </div>
            }
            </div>


              {/* MODAL */}
              <div
                className={` ${isModalOpen
                    ? "fixed top-0 right-0 z-20 h-[100dvh] w-[100dvw] bg-[rgba(210,210,210,0.5)]"
                    : " "
                    } `}
            ></div>

            <div
                className={`h-full  items-center w-[95%]  md:w-[500px] rounded-lg lg:h-[854px] lg:w-[749px]  flex justify-center lg:justify-items-end bg-[#010101]  shadow-lg z-30 lg:backdrop-blur-md backdrop-blur-md fixed top-2 lg:top-4  left-[2.5%] right-[2.5%] lg:right-7 transform ${isModalOpen ? "translate-y-0" : "-translate-y-[-200%] "
                    } transition-transform duration-300 ease-in-out`}
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
};

export default Transactions;
