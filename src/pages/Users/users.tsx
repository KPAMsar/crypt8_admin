import SearchIcon from "../../../src/assets/Icons/searchIcon.svg";
import UpDownIcon from "../../assets/Icons/searchUpandDownArrow.svg";
import ThreeDots from "../../../src/assets/Icons/thress-dots.svg";
import { getAllUsers } from "../../features/api/users/users";
import { useState, useEffect } from "react";
import { UserRes, UsersSingleRes } from "../../features/api/users/usersModel";
import { Pagination } from "../../components/pagination";

import { LineWave } from "react-loader-spinner";

const Users = () => {
  const [allUsers, setAllUsers] = useState<UsersSingleRes[]>([]);
  const [rotate, setRotate] = useState(false);

  const fetchAllUser = async () => {
    setRotate(true);
    try {
      const { users } = await getAllUsers();
      setAllUsers(users);
      console.log("this is data", users);
    } catch (error) {
      console.log("errir", error);
    } finally {
      setRotate(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // ... do something with `page`
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = allUsers?.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    fetchAllUser();
  }, []);

  return (
    <>
      <div className="lg:mb-[6rem] w-[100dvw] lg:w-[100%] overflow-hidden md:pl-[30px] pr-[10px] pl-[10px] md:pr-[30px] lg:pl-[48px] mt-[100px] lg:mt-[100px] lg:pr-[40px] overflow-hidden">
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
              <div className=" border-2 border-[#9CFA4A2B] w-[176px] rounded-lg  h-[40px]">
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
                <th>Sn</th>
                <th>Tag</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Wallet</th>
                <th>Status</th>
              </thead>
              <tbody className="bg-[#0E0E0E]  ">
                {currentPosts.length > 0 ? (
                  currentPosts.map((item) => (
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
                        {item?.id}
                      </td>
                      <td
                        style={{ border: "none" }}
                        className="p-[1rem] text-[#787878]"
                      >
                        {item?.tag}
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
                        {item?.wallet}
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
                  ))
                ) : (
                  <div className="flex justify-center text-center">
                    <p className="text-[20px] text-[white]">No Records</p>
                  </div>
                )}{" "}
              </tbody>
            </table>

            {rotate && (
              <div className="flex justify-center items-center w-full bg-[#0E0E0E] ">
                <LineWave
                  color="red"
                  middleLineColor="green"
                  lastLineColor="green"
                />
              </div>
            )}
          </div>
        </div>

        {!rotate && (
          <div className="flex justify-center mt-[10px]">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={allUsers.length}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Users;
