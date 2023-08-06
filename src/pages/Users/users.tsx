import SearchIcon from "../../../src/assets/Icons/searchIcon.svg";
import UpDownIcon from "../../assets/Icons/searchUpandDownArrow.svg";

const Users = () => {
   

    const data = [1, 2, 3, 4, 5];
    return (
        <>
            <div className="p-[66px]">
                <div>
                    <p className=" text-[white] pb-[78px] t-[24px]">Users</p>
                </div>

                <div className="bg-[#0E0E0E]">
                    <div className="flex justify-between p-[35px]">
                        <p className="text-[white]">All Users</p>

                        
                    </div>

                    <div className="flex justify-between p-[35px]  ">
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
        </>
    );
};

export default Users;
