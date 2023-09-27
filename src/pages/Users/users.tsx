import SearchIcon from "../../../src/assets/Icons/searchIcon.svg";
import UpDownIcon from "../../assets/Icons/searchUpandDownArrow.svg";
import ThreeDots from '../../../src/assets/Icons/thress-dots.svg';
import { getAllUsers } from "../../features/api/users/users";
import { useState, useEffect } from "react";
import { UserRes, UsersSingleRes } from "../../features/api/users/usersModel";
import ReactPaginate from "react-paginate";

const Users = () => {
    const [allUsers, setAllUsers] = useState<UsersSingleRes[]>([]);


    const fetchAllUser = async () => {
        const { users } = await getAllUsers();
        setAllUsers(users)
        console.log('this is data', allUsers);
    }



    const [PerItem, setPerItem] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    //   Start for Pagination
    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    };

    const offset = currentPage * Number(PerItem);
    const currentItem = allUsers?.slice(offset, offset + Number(PerItem));
    const pageCount = Math.ceil(allUsers?.length / Number(PerItem));
    //   End of Pagination


    useEffect(() => {
        fetchAllUser();
    }, []);

    const data = [1, 2, 3, 4, 5];
    return (





        <>
            <div className="lg:mb-[6rem] w-[100dvw] lg:w-[100%] overflow-hidden md:pl-[30px] pr-[10px] pl-[10px] md:pr-[30px] lg:pl-[48px] mt-[100px] lg:mt-[100px] lg:pr-[40px]">
                <div>
                    <p className=" text-[white] pb-[10px] text-[24px]">Users</p>
                </div>

                <div className="bg-[#0E0E0E]">
                    <div className="flex justify-between p-[35px]">
                        <p className="text-[white]">All Users</p>
                        <div className="flex gap-4 justify-between lg:hidden">
                            <img src={SearchIcon} alt="" />
                            <img src={ThreeDots} alt="" />
                        </div>

                    </div>

                    <div className="lg:flex hidden justify-between p-[35px]  ">
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
                                <th>User</th>
                                <th>Bank</th>
                                <th>Account Name</th>
                                <th>Account Number</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                            </thead>
                            <tbody className="bg-[#0E0E0E]  ">
                                {currentItem.length > 0 ?
                                    currentItem.map((item) => (
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
                                    )) : (
                                        <div>No Records</div>
                                    )}{" "}
                            </tbody>
                        </table>


                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-6/12 lg:w-6/12 md:mb-0 mb-8">
                                <div className="md:flex w-60 md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-10 md:mt-0">
                                    <label
                                        htmlFor="select"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Showing
                                    </label>
                                    <select
                                        value={PerItem}
                                        onChange={(e) => setPerItem(e.target.value)}
                                        id="select"
                                        aria-label="form-select-sm"
                                        className="block w-full p-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300 sm:text-sm"
                                    >
                                        <option disabled value="">
                                            --Select--
                                        </option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="50">50</option>
                                        <option value="75">75</option>
                                        <option value="100">100</option>
                                    </select>
                                    <span className="text-sm text-gray-500 flex w-80">
                                        of {currentItem.length} entries
                                    </span>
                                </div>
                            </div>
                            <div className="md:w-7/12 lg:w-7/12 md:justify-end">
                                <div className="mt-8 md:mt-0">
                                    <ReactPaginate
                                        previousLabel={"← Previous"}
                                        nextLabel={"Next →"}
                                        pageCount={pageCount}
                                        onPageChange={handlePageClick}
                                        pageRangeDisplayed={1}
                                        containerClassName={"flex items-center space-x-2"}
                                        previousLinkClassName={"text-green-600"}
                                        nextLinkClassName={"text-green-600"}
                                        disabledClassName={"text-gray-400"}
                                        activeClassName={
                                            "text-gray-400 font-bold w-7 h-7 border-2 flex items-center justify-center rounded-lg space-x-2"
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Users;
