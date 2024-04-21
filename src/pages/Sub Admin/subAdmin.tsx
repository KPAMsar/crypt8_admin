import SearchIcon from "../../../src/assets/Icons/searchIcon.svg";
import UpDownIcon from "../../assets/Icons/searchUpandDownArrow.svg";
import ThreeDots from "../../../src/assets/Icons/thress-dots.svg";
import Dots from "../../../src/assets/Icons/thress-dots.svg";
import { useState, useEffect } from "react";
import { getAllSubAdmin } from "../../features/api/subadmin/subAdminApi";
import { SubAdminSingleRes } from "../../features/api/subadmin/subAdminModel";
import { subAdminRes } from "../../features/api/subadmin/subAdminModel";
import { Pagination } from "../../components/pagination";
import { LineWave } from "react-loader-spinner";

const SubAdmin = () => {
    const [allSubAdmin, setAllSubAdmin] = useState<SubAdminSingleRes[]>([]);
    const [rotate, setRotate] = useState(false);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = allSubAdmin?.slice(firstPostIndex, lastPostIndex);

    const fetchAllAdmin = async () => {
        setRotate(true);
        try {
            const { users } = await getAllSubAdmin();
            setAllSubAdmin(users);
            console.log("this is data", users);
        } catch (error) {
            console.log("errir", error);
        } finally {
            setRotate(false);
        }
    };

    useEffect(() => {
        fetchAllAdmin();
    }, []);

    return (
        <>
            <div className="lg:mb-[6rem] w-[100dvw] lg:w-[100%] overflow-hidden md:pl-[30px] pr-[10px] pl-[10px] md:pr-[30px] lg:pl-[48px] mt-[100px] lg:mt-[100px] lg:pr-[40px]">
                <div className="flex lg:hidden justify-between pb-[20px]">
                    <p></p>
                    <p
                        style={{
                            background:
                                "linear-gradient(40deg, #9CFA4A2B 2%, rgba(156, 250, 74, 0.00) 65%) ",
                        }}
                        className="text-[#9CFA4A]  py-[5px] px-[10px] lg:p-2 lg:px-[150px] lg:py-4  border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  "
                    >
                        Add Gift Card
                    </p>
                </div>

                <div>
                    <p className=" text-[white] pb-[78px] text-[24px] hidden lg:block">
                        Sub Admin
                    </p>
                </div>

                <div className="bg-[#0E0E0E] ">
                    <div className="flex justify-between p-[35px]">
                        <p className="text-[white]">SubAdmin</p>
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

                    <div className=" overflow-x-auto">
                        <table className="table w-full pb-[60px]">
                            <thead className="text-white ">
                                <th className="min-w-[50px]">SN</th>
                                <th className="min-w-[100px]">First Name</th>
                                <th className="min-w-[100px]">Last Name</th>
                                <th className="min-w-[100px]">Email</th>
                                <th className="min-w-[200px]">Phone Number</th>
                                <th className="min-w-[100px]">Date</th>
                                <th></th>
                            </thead>
                            <tbody className="bg-[#0E0E0E]  ">
                                {currentPosts?.map((item, index) => (
                                    <tr
                                        key={index}
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
                                            {item?.firstname}
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878]"
                                        >
                                            {item?.lastname}
                                        </td>

                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878]"
                                        >
                                           {item?.email}
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878]"
                                        >
                                            {item?.phone}
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878]"
                                        >
                                            {item?.created_at}
                                        </td>
                                        <td
                                            style={{ border: "none" }}
                                            className="p-[1rem]  text-[#787878]"
                                        >
                                            <img src={Dots} alt="" />
                                        </td>
                                    </tr>
                                ))}{" "}
                            </tbody>
                        </table>
                    </div>
                </div>
                {rotate && (
          <div className="flex justify-center items-center w-full bg-[#0E0E0E] ">
            <LineWave
              color="red"
              middleLineColor="green"
              lastLineColor="green"
            />
          </div>
        )}
                <div className="flex justify-center mt-[10px]">
                    {!rotate && (
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={allSubAdmin?.length}
                            onPageChange={handlePageChange}
                            currentPage={currentPage}
                        />
                    )}

                    {/* {processing && <ProcesingLoader />} */}
                </div>
            </div>
        </>
    );
};

export default SubAdmin;
