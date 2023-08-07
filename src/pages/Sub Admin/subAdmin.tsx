import SearchIcon from "../../../src/assets/Icons/searchIcon.svg";
import UpDownIcon from "../../assets/Icons/searchUpandDownArrow.svg";
import { Modal, Form } from "react-bootstrap";
import Dots from '../../../src/assets/Icons/thress-dots.svg';

const SubAdmin = () => {
   

    const data = [1, 2, 3, 4, 5];
    return (
        <>
            <div className="p-[66px]">
                <div>
                    <p className=" text-[white] pb-[78px] text-[24px]">Sub Admin</p>
                </div>


                <div className="bg-[#0E0E0E] ">
                    <div className="flex justify-between p-[35px]">
                        <p className="text-[white]">Sub Admin</p>
                        <p style={{
                            background:
                                "linear-gradient(40deg, #9CFA4A2B 2%, rgba(156, 250, 74, 0.00) 65%) ",
                        }} className='text-[#9CFA4A]  p-2 px-[150px] py-4  border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  '  >Add Sub Admin</p>
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

                    <div className="">
                      <table className="table w-full pb-[60px]">
                          <thead className="text-white ">
                              <th>SN</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Email</th>
                              <th>Phone Number</th>
                              <th>Date</th>
                              <th></th>
                          </thead>
                          <tbody className="bg-[#0E0E0E]  ">
                              {data.map((item, index) => (
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
                                          Daniel
                                      </td>
                                      <td
                                          style={{ border: "none" }}
                                          className="p-[1rem]  text-[#787878]"
                                      >
                                         Obiora
                                      </td>
                      
                      
                                      <td
                                          style={{ border: "none" }}
                                          className="p-[1rem]  text-[#787878]"
                                      >
                                        Daniel@gmail.com
                                      </td>
                                      <td
                                          style={{ border: "none" }}
                                          className="p-[1rem]  text-[#787878]"
                                      >
                                        09093389742
                                      </td>
                                      <td
                                          style={{ border: "none" }}
                                          className="p-[1rem]  text-[#787878]"
                                      >
                                        01/01/2020
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
            </div>
        </>
    );
};

export default SubAdmin;
