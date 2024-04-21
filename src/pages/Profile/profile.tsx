// import RoundPhotoIcon from '../../assets/Icons/roundPhotoIcon.png';
import { useState, useEffect } from "react";
import SearchIcon from "../../../src/assets/Icons/searchIcon.svg";
import ModalCloseIcon from "../../../src/assets/Icons/ModalCloseIcon.svg";
import { AiOutlineClose } from "react-icons/ai";
import ThreeDots from "../../../src/assets/Icons/thress-dots.svg";
import { listAllProfile } from "../../features/api/profile/profileApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProfileSingleRes } from "../../features/api/profile/profileModel";
import { LineWave } from "react-loader-spinner";
import { Pagination } from "../../components/pagination";
import { addProfile } from "../../features/api/profile/profileApi";
import { ProcesingLoader } from "../../components/processingLoader";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";

const Profile = () => {
  const [profileData, setProfileData] = useState<ProfileSingleRes[]>([]);
  const [rotate, setRotate] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = profileData?.slice(firstPostIndex, lastPostIndex);

  const handleShowPassword = () => {
    const pwd = document.getElementById("password");
    const typ = pwd.getAttribute("type");
    if (typ === "password") {
      pwd.setAttribute("type", "text");
    } else {
      pwd.setAttribute("type", "password");
    }
  };

  const fetchAllProfile = async () => {
    try {
      setRotate(true);
      const data = await listAllProfile();
      console.log("data", data);

      if (data?.status === "success") {
        setProfileData(data["sub-admins"]);
      } else {
        toast.info("something went wrong");
      }
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setRotate(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const temp = { ...form };
    temp[name] = value;

    setForm(temp);
  };

  const handleAddProfile = async () => {
    const { firstname, lastname, email, phone, password } = form;
    if (!firstname || !lastname || !email || !phone || !password) {
      toast.error("Input all detais correctly");
      return;
    }

    try {
      setLoading(true);

      const data = await addProfile({
        firstname,
        lastname,
        email,
        phone,
      });
      console.log("saced response", data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
      setShow(false);
    }
  };

  useEffect(() => {
    fetchAllProfile();
  }, []);

  return (
    <>
      <div className=" lg:mb-[6rem] w-[100dvw] lg:w-[100%] overflow-hidden md:pl-[30px] pr-[5px] pl-[5px] md:pr-[30px] lg:pl-[48px] mt-[100px] lg:mt-[100px] lg:pr-[40px]">
        <div>
          <p className=" lg:pr-[66px]  text-[24px] text-[white] lg:pb-[78px] lg:text-[24px] hidden  md:block md: mb-[20px] lg:block">
            Profile
          </p>
        </div>

        <div className="flex justify-between  pb-7">
          <div className="border border-none bg-[#0E0E0E] w-[670px] rounded-lg h-[60px] items-center  md:flex lg:flex justify-between hidden  ">
            <input
              className="text-[#9C9696] justify-center items-center pl-3 w-[100%] bg-[#0E0E0E]"
              placeholder="Search Bookings"
            />

            <div className="items-center pl-[5px]">
              <img src={SearchIcon} alt="" className="items-center pr-3" />
            </div>
          </div>
          <p></p>
          <p
            style={{
              background:
                "linear-gradient(40deg, #9CFA4A2B 2%, rgba(156, 250, 74, 0.00) 65%) ",
            }}
            className="text-[#9CFA4A] lg:p-2 flex justify-end px-[40px] lg:px-[150px] py-3 lg:py-4  items-end border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B] "
            onClick={() => setShow(true)}
          >
            Add Profile
          </p>
        </div>

        <div className="bg-[#0E0E0E] ">
          <div>
            <p className=" lg:hidden text-[white]  lg:pb-[78px] pl-[40px] pt-[40px] text-[24px]">
              Profile
            </p>
          </div>

          <div className="overflow-x-auto overflow-y-auto">
            <table className="table min-w-[700px] min-h-[90px] pb-[60px] pt-[56px] mt-[56px] transform ">
              <thead className="text-white ">
                <th className="min-w-[100px]">First Name</th>
                <th className="min-w-[100px]">Last Name</th>
                <th className="min-w-[100px]">Email </th>
                <th className="min-w-[100px]">Phone Number</th>
                <th className="min-w-[100px]">Role</th>
              </thead>
              <tbody className="overflow-x-auto">
                {currentPosts?.map((item, id) => (
                  <tr
                    key={id}
                    style={{ border: "none", justifyItems: " center" }}
                    className="text-center min-w-[120px]"
                  >
                    <td
                      style={{ border: "none" }}
                      className="p-[1rem] text-center text-[#787878]"
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
                      {item?.role}{" "}
                    </td>
                  </tr>
                ))}
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
              totalPosts={profileData?.length}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          )}

          {processing && <ProcesingLoader />}
        </div>
      </div>

      {/* MODAL */}
      <div
        className={` ${
          show
            ? "fixed top-0 right-0 z-20 h-[100dvh] w-[100dvw] bg-[rgba(210,210,210,0.5)]"
            : " "
        } `}
      ></div>

      <div
        className={`h-[100dvh]  items-center w-[95%]   md:w-[500px] rounded-lg lg:h-[854px] lg:w-[749px]  lg:absolute lg:right-[0px] flex justify-center lg:justify-items-end bg-[#010101]  shadow-lg   z-30 lg:backdrop-blur-md backdrop-blur-md fixed top-2 lg:top-4    lg:right-[0%] right-[2.5%] lg:right-7 transform ${
          show ? "translate-y-0" : "-translate-y-[-200%] "
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
              Add Profile
            </h2>
            <div className="flex  flex-col gap-4 ">
              <div className="bg-[#0E0E0E]">
                <small className=" text-[#666666] text-[12px] p-4   ">
                  {" "}
                  First Name
                </small>
                <input
                  id="firstname"
                  name="firstname"
                  className=" bg-[#0E0E0E]  text-[white]  lg:h-[60px] h-[50px] mb-[30px]  justify-between flex flex-col justify-item p-4 lg:p-4 gap-3 w-[100%]"
                  placeholder=" Sadiq"
                  onChange={handleChange}
                />
              </div>
              <div className="bg-[#0E0E0E]">
                <small className=" text-[#666666] text-[12px] p-4   ">
                  {" "}
                  Last Name
                </small>
                <input
                  id="lastname"
                  name="lastname"
                  className=" bg-[#0E0E0E]  text-[white]  lg:h-[60px] h-[50px] mb-[30px]  justify-between flex flex-col justify-item p-4 lg:p-4 gap-3 w-[100%]"
                  placeholder=" Fawaz"
                  onChange={handleChange}
                />
              </div>
              <div className="bg-[#0E0E0E]">
                <small className=" text-[#666666] text-[12px] p-4   ">
                  {" "}
                  Email Address
                </small>
                <input
                  id="email"
                  name="email"
                  className=" bg-[#0E0E0E]  text-[white]  lg:h-[60px] h-[50px] mb-[30px]  justify-between flex flex-col justify-item p-4 lg:p-4 gap-3 w-[100%]"
                  placeholder=" sadiqfawaz@gmail.com"
                  onChange={handleChange}
                />
              </div>

              <div className="bg-[#0E0E0E]">
                <small className=" text-[#666666] text-[12px] p-4   ">
                  {" "}
                  Phone Number
                </small>
                <input
                  id="phone"
                  name="phone"
                  className=" bg-[#0E0E0E]  text-[white]  lg:h-[60px] h-[50px] mb-[30px]  justify-between flex flex-col justify-item p-4 lg:p-4 gap-3 w-[100%]"
                  placeholder=" 0908877654"
                  onChange={handleChange}
                />
              </div>
              <div className="bg-[#0E0E0E]">
                <small className=" text-[#666666] text-[12px] p-4   ">
                  {" "}
                  Password
                </small>
                <div className="flex justify-between ">
                  <input
                    id="password"
                    name="role"
                    type="password"
                    className=" bg-[#0E0E0E]  text-[white]  lg:h-[60px] h-[50px] mb-[30px]  justify-between flex flex-col justify-item p-4 lg:p-4 gap-3 w-[100%]"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    onChange={handleChange}
                  />
                  <div className="px-[10px] flex  items-center">
                    <p
                      className="text-white"
                      onClick={() => {
                        setShowPassword(!showPassword);
                        handleShowPassword();
                      }}
                    >
                      {!showPassword ? <PiEyeBold /> : <PiEyeClosedBold />}
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  background:
                    "linear-gradient(40deg, #9CFA4A2B 2%, rgba(156, 250, 74, 0.00) 65%) ",
                }}
                className="text-[#9CFA4A]  p-2 px-[100px] sm:w-full py-4  border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  text-center "
                onClick={handleAddProfile}
              >
                {!loading && "Save"}
                {loading && (
                  <div className="flex justify-center items-center w-full ">
                    Save{" "}
                    <LineWave
                      color="red"
                      height="60"
                      width="60"
                      middleLineColor="green"
                      lastLineColor="green"
                    />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
