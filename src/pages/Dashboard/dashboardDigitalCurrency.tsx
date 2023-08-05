import RoundPhotoIcon from "../../assets/Icons/roundPhotoIcon.png";
import SearchIcon from "../../../src/assets/Icons/searchIcon.svg";
import UpDownIcon from "../../assets/Icons/searchUpandDownArrow.svg";
import ModalCloseIcon from '../../../src/assets/Icons/ModalCloseIcon.svg';
import { useState } from "react";
import React from "react";
import DashboardCryptoCurrency from "./dashboardCryptoCurrency";

const DashboardDigitalCurrency = () => {
  const [isShow, invokeModal] = React.useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const initModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log(isShow);

  const data = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="p-[66px]">
        <div>
          <p className=" text-[white] pb-[78px]">All Digital Currency</p>
        </div>

        <div className="bg-[#0E0E0E]">
          <div className="flex justify-between p-[35px]">
            <p className="text-[white]">All Digital Currency</p>
            <p
              style={{
                background:
                  "linear-gradient(40deg, #9CFA4A2B 2%, rgba(156, 250, 74, 0.00) 65%) ",
              }}
              className="text-[#9CFA4A]  p-2 px-[150px] py-4  border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  "
              onClick={initModal}
            >
              Add Gift Card
            </p>
            {/* <label className="btn btn-primary" htmlFor="modal-1">Open Modal</label> */}
          </div>

          <div className="flex justify-between p-[35px] ">
            <div className="flex text-[#9CFA4A]  gap-4  items-center ">
              <p>Show</p>
              <div className="border border-2 border-[#9CFA4A2B] w-[176px] rounded-lg  h-[40px]">
                <img src={UpDownIcon} alt="" />
              </div>
              <p>Entries</p>
            </div>

            <div className="flex  justify-start flex-start rounded-lg gap-2 text-[#9CFA4A]  p-2 px-[100px] border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  ">
              <img src={SearchIcon} alt="" /> Search
            </div>
          </div>

          <table className="table w-full pb-[60px]">
            <thead className="text-white ">
              <th>S/N</th>
              <th>Logo</th>
              <th>Name</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </thead>
            <tbody className="bg-[#0E0E0E]  ">
              {data.map((items, index) => (
                <tr style={{ border: "none", justifyItems: " center" }}>
                  <th
                    style={{ border: "none", paddingLeft: "3rem" }}
                    className="p-[1rem] "
                  >
                    {index + 1}
                  </th>
                  <th style={{ border: "none" }} className="p-[1rem]">
                    <img src={RoundPhotoIcon} alt="" />
                  </th>
                  <td
                    style={{ border: "none" }}
                    className="p-[1rem] text-[#787878]"
                  >
                    Kpamsar Shija
                  </td>
                  <td
                    style={{ border: "none" }}
                    className="p-[1rem]  text-[#787878]"
                  >
                    Deposited $4230{" "}
                  </td>
                  <td
                    style={{ border: "none" }}
                    className="p-[1rem]  text-[#787878]"
                  >
                    <button className="btn bg-[#9CFA4A2B] text-[#9CFA4A]">
                      Edit
                    </button>
                  </td>
                  <td
                    style={{ border: "none" }}
                    className="p-[1rem]  text-[#787878]"
                  >
                    <button className="btn bg-[#DA0808] text-[#f0a9a9]">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* MODAL */}
      <div
        className={`h-[854px] w-[749px] flex justify-items-end bg-[#010101] shadow-lg z-30 backdrop-blur-md fixed top-2 right-7 transform ${
          isModalOpen ? "translate-y-0" : "-translate-y-[-200%] "
        } transition-transform duration-300 ease-in-out`}
      >
        {/* modal content goes here */}
        <div className="p-8">

            <div className="flex  justify-between pl-[32rem]" onClick={closeModal}>
                <img src={ModalCloseIcon} alt="" />
            </div>
            <div>
                <h2 className=" text-[#FFFFFF]  text-[24px] text-center pt-[40px] pb-[50px]">Add Gift Card</h2>
              <div className="flex  flex-col gap-11 ">
              <div className=" bg-[#0E0E0E] h-[90px] flex flex-col justify-item p-4 gap-3">
                    <small className=" text-[#666666]  text-[12px]"> Card Name</small>
                    <p className="text-white text-[16px]">Gift Card</p>
                </div>
                <div className=" bg-[#0E0E0E] h-[90px] flex flex-col justify-item p-4 gap-3">
                    <small className=" text-[#666666]  text-[12px]"> Choose Logo</small>
                    <p className="text-white text-[16px]">Gift Card</p>
                </div>
                <p
              style={{
                background:
                  "linear-gradient(40deg, #9CFA4A2B 2%, rgba(156, 250, 74, 0.00) 65%) ",
              }}
              className="text-[#9CFA4A]  p-2 px-[150px] py-4  border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  text-center "
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

export default DashboardDigitalCurrency;
