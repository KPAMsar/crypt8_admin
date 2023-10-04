import SearchIcon from "../../../src/assets/Icons/searchIcon.svg";
import UpDownIcon from "../../assets/Icons/searchUpandDownArrow.svg";
import { Modal, Form } from "react-bootstrap";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { NoficationRes } from "../../features/api/notification/notificationModel";
import { listNotifications } from "../../features/api/notification/notification";
import { Pagination } from "../../components/pagination";
import { LineWave } from "react-loader-spinner";

const Notification = () => {

    const [rotate, setRotate] = useState(false);
    const [notification, setNotifications] = useState<NoficationRes[]>([]);



    const fetchAllTransactions = async () => {

        try {
            setRotate(true);
            const { notifications } = await listNotifications();

            console.log('data frm notification', notifications);

            setNotifications(notifications);



        }
        catch (error) {
            console.log('errir', error);
        }
    }



    const handlePageChange = (page) => {
        setCurrentPage(page);

    }
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);


    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = notification?.slice(firstPostIndex, lastPostIndex);




    useEffect(() => {
        fetchAllTransactions();
    }, [])
    const data = [1, 2, 3, 4, 5];


    return (
        <>
            <div className="lg:mb-[6rem] w-[100dvw] lg:w-[100%] overflow-hidden md:pl-[30px] pr-[10px] pl-[10px] md:pr-[30px] lg:pl-[48px] mt-[100px] lg:mt-[100px] lg:pr-[40px]">
                {/* <div>
                    <p className=" text-[white] pb-[78px] t-[24px]">Users</p>
                </div> */}

                <div className="flex lg:hidden justify-between pb-[20px]">
                    <p></p>
                    <p style={{
                        background:
                            "linear-gradient(40deg, #9CFA4A2B 2%, rgba(156, 250, 74, 0.00) 65%) ",
                    }} className='text-[#9CFA4A]  py-[5px] px-[10px] lg:p-2 lg:px-[150px] lg:py-4  border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  '  >Add Notification</p>
                </div>

                <div className="bg-[#0E0E0E] ">
                    <div className="flex-col lg:flex justify-between  py-[30px] lg:p-[35px]">
                        <p className="text-[white] text-[18px] lg:text-[24px] pl-[10px]">Notification</p>

                        <div className="lg:flex hidden justify-between">
                            <p></p>
                            <p style={{
                                background:
                                    "linear-gradient(40deg, #9CFA4A2B 2%, rgba(156, 250, 74, 0.00) 65%) ",
                            }} className='text-[#9CFA4A]  py-[15px] px-[40px] lg:p-2 lg:px-[150px] lg:py-4  border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  '  >Add Notification</p>
                        </div>
                    </div>

                    <div className="lg:flex justify-between p-[35px] hidden">
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
                        <table className="table w-full pb-[60px]">
                            <thead className="text-white ">
                                <th className="min-w-[100px]">SN</th>
                                <th className="min-w-[100px]">Subject</th>
                                <th className="min-w-[100px]">Notification</th>
                                <th className="min-w-[100px]">Date</th>
                                <th className="min-w-[100px]">Action</th>
                            </thead>
                            <tbody className="bg-[#0E0E0E]  ">

                                {currentPosts.length > 0 ? currentPosts.map((item) => (
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
                                            1
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem] text-[#787878]"
                                        >
                                            Apple Card
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878]"
                                        >
                                            Apple Card  600/$ * (500s - 2000s) *(10 -50mins)(no return)
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
                                            <div className="flex gap-2">
                                                <button className="btn bg-[#9CFA4A2B] text-[#9CFA4A]"> Approved</button>
                                                <button className="btn bg-[#DA0808] text-[#f0a9a9]">Delete</button>
                                            </div>

                                        </td>
                                    </tr>
                                )) : (
                                    <div className="flex justify-center text-center" >
                                        <p className="text-[20px] text-[white]">No Records</p>
                                    </div>
                                )} :
                            </tbody>
                        </table>
                    </div>
                </div>


                {rotate && <div className='flex justify-center items-center w-full bg-[#0E0E0E] '>
                            <LineWave color="red" middleLineColor="green" lastLineColor="green" />
                        </div>
                        }

            </div>

            {!rotate && <div className="flex justify-center mt-[10px]">
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={notification?.length}
                        onPageChange={handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
                }
        </>
    );
};

export default Notification;
