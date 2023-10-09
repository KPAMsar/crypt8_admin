import SearchIcon from "../../../src/assets/Icons/searchIcon.svg";
import UpDownIcon from "../../assets/Icons/searchUpandDownArrow.svg";
import { Modal, Form } from "react-bootstrap";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { NoficationRes } from "../../features/api/notification/notificationModel";
import { listNotifications, addNotification } from "../../features/api/notification/notification";
import { Pagination } from "../../components/pagination";
import { LineWave } from "react-loader-spinner";
import { deleteNotifications } from "../../features/api/notification/notification";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ProcesingLoader } from "../../components/processingLoader";
import { AiOutlineClose } from "react-icons/ai";

const Notification = () => {

    const [rotate, setRotate] = useState(false);
    const [notification, setNotifications] = useState<NoficationRes[]>([]);
    const [processing, setProcessing] = useState(false);
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [updateInfo, setUpdateInfo] = useState();

    const initModal = () => {
        setIsModalOpen(true);
    };

    const fetchAllNotifications = async () => {
        try {
            setRotate(true);
            const { notifications } = await listNotifications();
            console.log('data frm notification', notifications);
            setNotifications(notifications);
        }
        catch (error) {
            console.log('errir', error);
        }
        finally {
            setRotate(false);
        }
    }

    const deleteAllNotifications = async (id) => {
        try {
            setProcessing(true);
            const { data } = await deleteNotifications(id);

            if (data?.status === 'Success') {

                toast.success(data?.message)
            }
        }
        catch (error) {
            toast.error(error.message);
        }
        finally {
            setProcessing(false);
        }
    }

    const handleAddNotifications = async (e) => {
        e.preventDefault();
        if (!title) {
            toast.error('Title field is required');
            return;
        }
        if (!message) {
            toast.error('Message field is required');
            return;
        }

        try {
            setLoading(true);
            setIsModalOpen(true);
            const { data } = await addNotification({
                subject: title,
                message,
            });
            if (data?.status === "Success") {
                toast.success(data?.message);
            }
            console.log('data reprot ', data)
        }
        catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false);
            setIsModalOpen(false);
            setShow(false);
        }
    }

    const updateNotification = async (id) => {

    }


    const handlePageChange = (page) => {
        setCurrentPage(page);
    }
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = notification?.slice(firstPostIndex, lastPostIndex);

    const fetchNotificationDetails = async (id) => {
        const data = notification.filter(item => item?.id === id);
        console.log('data of the update', data);
        setUpdateInfo(data);
        //    return data;
    }


    useEffect(() => {
        fetchAllNotifications();

    }, [])

    useEffect(() => {
        fetch
    })


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
                    }} className='text-[#9CFA4A]  py-[5px] px-[10px] lg:p-2 lg:px-[150px] lg:py-4  border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  ' onClick={() => setShow(true)}>Add Notification</p>
                </div>

                <div className="bg-[#0E0E0E] ">
                    <div className="flex-col lg:flex justify-between  py-[30px] lg:p-[35px]">
                        <p className="text-[white] text-[18px] lg:text-[24px] pl-[10px]">Notification</p>

                        <div className="lg:flex hidden justify-between">
                            <p></p>
                            <p style={{
                                background:
                                    "linear-gradient(40deg, #9CFA4A2B 2%, rgba(156, 250, 74, 0.00) 65%) ",
                            }} className='text-[#9CFA4A]  py-[15px] px-[40px] lg:p-2 lg:px-[150px] lg:py-4  border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  ' onClick={() => setShow(true)} >Add Notification</p>
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

                                {currentPosts.length > 0 ? currentPosts.map((item, id) => (
                                    <tr
                                        key={id}
                                        style={{
                                            border: "none",
                                            justifyItems: " center",
                                        }}
                                    >


                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem] text-[#787878]"
                                        >
                                            {id + 1}
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem] text-[#787878]"
                                        >
                                            {item?.subject}
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878]"
                                        >
                                            {item?.notification}
                                        </td>


                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878]"
                                        >
                                            {item?.updated_at}
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878] flex justify-between"
                                        >
                                            <div className="flex gap-2">

                                                <button className="btn bg-[#DA0808] text-[#f0a9a9]" onClick={() => deleteAllNotifications(item?.id)}>Delete</button>
                                                <button className="btn bg-[#9CFA4A2B] text-[#9CFA4A]" onClick={() => {
                                                    setShowUpdate(true);

                                                    fetchNotificationDetails(item?.id)
                                                }}> Update</button>
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
                <div className="flex justify-center mt-[10px]">
                    {!rotate && <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={notification?.length}
                        onPageChange={handlePageChange}
                        currentPage={currentPage}
                    />

                    }

                    {processing && < ProcesingLoader />}
                </div>
            </div>


            <div className="flex justify-center mt-[10px]">

            </div>


            {/* MODAL */}
            <div
                className={` ${show
                    ? "fixed top-0 right-0 z-20 h-[100dvh] w-[100dvw] bg-[rgba(210,210,210,0.5)]"
                    : " "
                    } `}
            ></div>

            <div
                className={`h-[100dvh]  items-center w-[95%]   md:w-[500px] rounded-lg lg:h-[854px] lg:w-[749px]  lg:absolute lg:right-[0px] flex justify-center lg:justify-items-end bg-[#010101]  shadow-lg   z-30 lg:backdrop-blur-md backdrop-blur-md fixed top-2 lg:top-4    lg:right-[0%] right-[2.5%] lg:right-7 transform ${show ? "translate-y-0" : "-translate-y-[-200%] "
                    } transition-transform duration-300 ease-in-out pb-[30px]`}
            >
                {/* modal content goes here */}
                <div className="p-3 w-full">
                    <div
                        className="flex  justify-between pl-[40px] lg:pl-[32rem]"
                        onClick={() => setShow(false)}
                    >

                        {/* <img src={ModalCloseIcon} alt="" /> */}
                        <AiOutlineClose className=" text-[30px] items-end text-[#9CFA4A] font-[700] absolute top-[20px] right-[30px]" />
                    </div>
                    <div>
                        <h2 className=" text-[#FFFFFF]  text-[24px] text-center pt-[40px] pb-[50px]">
                            Add System Notification
                        </h2>
                        <div className="flex  flex-col gap-4 ">
                            <form onSubmit={handleAddNotifications} >
                                <div className='bg-[#0E0E0E]'>
                                    <small className=" text-[#666666] text-[12px] p-4   ">
                                        {" "}
                                        Subject [title]
                                    </small>
                                    <input id="currencyName" name="currencyName" value={title} className=" bg-[#0E0E0E]  text-[white]  lg:h-[60px] h-[50px] mb-[30px]  justify-between flex flex-col justify-item p-4 lg:p-4 gap-3 w-[100%] h-[120px]" placeholder=" Title" onChange={(e) => { setTitle(e.target.value) }} />
                                </div>
                                <div className='bg-[#0E0E0E]'>
                                    <small className=" text-[#666666] text-[12px] p-4   ">
                                        {" "}
                                        Notification Message
                                    </small>
                                    <input id="currencyName" name="currencyName" value={message} className=" bg-[#0E0E0E]  text-[white]  lg:h-[60px] h-[50px] mb-[30px]  justify-between flex flex-col justify-item p-4 lg:p-4 gap-3 w-[100%] h-[120px]" placeholder=" Message" onChange={(e) => { setMessage(e.target.value) }} />
                                </div>

                                <button type="submit"
                                    style={{
                                        background:
                                            "linear-gradient(40deg, #9CFA4A2B 2%, rgba(156, 250, 74, 0.00) 65%) ",
                                    }}
                                    className="text-[#9CFA4A]  p-2 px-[100px] sm:w-full py-4  border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  text-center "
                                    onClick={initModal}
                                >
                                    {!loading && 'Save'}
                                    {loading && <div className='flex justify-center items-center w-full '>
                                        Submit <LineWave color="red" height="60" width="60" middleLineColor="green" lastLineColor="green" />
                                    </div>}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* UPDATE MODAL */}
            <div
                className={` ${showUpdate
                    ? "fixed top-0 right-0 z-20 h-[100dvh] w-[100dvw] bg-[rgba(210,210,210,0.5)]"
                    : " "
                    } `}
            ></div>

            <div
                className={`h-[100dvh]  items-center w-[95%]   md:w-[500px] rounded-lg lg:h-[854px] lg:w-[749px]  lg:absolute lg:right-[0px] flex justify-center lg:justify-items-end bg-[#010101]  shadow-lg   z-30 lg:backdrop-blur-md backdrop-blur-md fixed top-2 lg:top-4    lg:right-[0%] right-[2.5%] lg:right-7 transform ${showUpdate ? "translate-y-0" : "-translate-y-[-200%] "
                    } transition-transform duration-300 ease-in-out pb-[30px]`}
            >
                {/* modal content goes here */}
                <div className="p-3 w-full">
                    <div
                        className="flex  justify-between pl-[40px] lg:pl-[32rem]"
                        onClick={() => setShowUpdate(false)}
                    >

                        {/* <img src={ModalCloseIcon} alt="" /> */}
                        <AiOutlineClose className=" text-[30px] items-end text-[#9CFA4A] font-[700] absolute top-[20px] right-[30px]" />
                    </div>
                    <div>
                        <h2 className=" text-[#FFFFFF]  text-[24px] text-center pt-[40px] pb-[50px]">
                            Update System Notification
                        </h2>
                        <div className="flex  flex-col gap-4 ">
                            <form onSubmit={handleAddNotifications} >
                                <div className='bg-[#0E0E0E]'>
                                    <small className=" text-[#666666] text-[12px] p-4   ">
                                        {" "}
                                        Subject [title]
                                    </small>
                                    <input id="currencyName" name="currencyName" value={updateInfo?.subject} className=" bg-[#0E0E0E]  text-[white]  lg:h-[60px] h-[50px] mb-[30px]  justify-between flex flex-col justify-item p-4 lg:p-4 gap-3 w-[100%] h-[120px]" placeholder=" Title" onChange={(e) => { setTitle(e.target.value) }} />
                                </div>
                                <div className='bg-[#0E0E0E]'>
                                    <small className=" text-[#666666] text-[12px] p-4   ">
                                        {" "}
                                        Notification Message
                                    </small>
                                    <input id="currencyName" name="currencyName" value={updateInfo?.notification} className=" bg-[#0E0E0E]  text-[white]  lg:h-[60px] h-[50px] mb-[30px]  justify-between flex flex-col justify-item p-4 lg:p-4 gap-3 w-[100%] h-[120px]" placeholder=" Message" onChange={(e) => { setMessage(e.target.value) }} />
                                </div>

                                <button type="submit"
                                    style={{
                                        background:
                                            "linear-gradient(40deg, #9CFA4A2B 2%, rgba(156, 250, 74, 0.00) 65%) ",
                                    }}
                                    className="text-[#9CFA4A]  p-2 px-[100px] sm:w-full py-4  border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  text-center "
                                    onClick={initModal}
                                >
                                    {!loading && 'Save'}
                                    {loading && <div className='flex justify-center items-center w-full '>
                                        Submit <LineWave color="red" height="60" width="60" middleLineColor="green" lastLineColor="green" />
                                    </div>}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Notification;
