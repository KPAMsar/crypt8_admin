import Logo from '../../assets/Icons/logo.svg'
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { LoginAdmin } from '../../lib/api/auth';



const Login = () => {

    const [email, setEmail] = useState(''),
        [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e:React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();
        
        if (email == undefined || email == null || !email ) {
            toast.error('Email is required');
            return false;
        }
        if (password == undefined || !password || password === null) {
            toast.error('Password is required');
            return false;
        }

        const infoBox = toast.loading("Please wait your request is processing...");
        try{
        const  adminUser = await LoginAdmin({email, password});

        toast.update(infoBox, { render: "Success!", type: "success", isLoading: false, autoClose: 4000, hideProgressBar: false, closeOnClick: true, progress: undefined });
        

           console.log('thee',adminUser)
        // updateUser(user);

        // navigate("/dashboard", { replace: true });
          window.localStorage.setItem('crypt8-admin-authtoken', adminUser.data.token);

          window.location.replace('/');

        }catch (error) {
            const displayMsg = error?.data?.message;
        
           
            toast.error(infoBox, {
             
              type: "error",
              isLoading: false,
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              progress: undefined,
            });
          }
        };


    return (
        <>
            <div className="bg-[#010101] lg:mb-[6rem] w-[100dvw] lg:w-[100%] overflow-hidden md:pl-[30px] pr-[10px] pl-[10px] md:pr-[30px] lg:pl-[48px]   lg:pr-[40px] fixed">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className=' flex  h-screen  items-center justify-center'>

                    <div className='items-center w-[500px] justify-center'>
                        <div className='justify-center pb-[30px]'>
                            <p className='text-[#FFFFFF] text-[30px] lg:text-[40px] '>Welcome  back Admin</p>
                            <p className='text-[#666666] text-[16px] pb-5' >Ready To make Magic happen</p>
                        </div>
                        <form id="login-form" onSubmit={handleLogin}>
                            <div className='bg-[#0E0E0E]'>
                                <small className="  text-[#666666]  text-[18px] p-4  ">
                                    {" "}
                                    Email Address
                                </small>
                                {/* <p className="text-white text-[20px]">Cash</p> */}
                                <input type='email' id="email" name="email" className=" bg-[#0E0E0E] text-[white]  lg:h-[60px]  justify-between flex flex-col justify-item p-2 lg:p-4 gap-3 w-[100%] h-[50px] mb-[30px]" placeholder='sadiqfawaz@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                            </div>


                            <div className='bg-[#0E0E0E]'>
                                <small className="  text-[#666666]  text-[18px] p-4  ">
                                    {" "}
                                    Password
                                </small>
                                {/* <p className="text-white text-[20px]">Cash</p> */}
                                <input type='text' className=" bg-[#0E0E0E] text-[white]  lg:h-[60px]  justify-between flex flex-col justify-item p-2 lg:p-4 gap-3 w-[100%] h-[50px] mb-[30px]" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"

                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div>
                                <button type='submit'
                                    style={{
                                        background:
                                            "linear-gradient(40deg, #9CFA4A2B 2%, rgba(156, 250, 74, 0.00) 65%) ",
                                    }}
                                    className="text-[#9CFA4A]  w-full p-2 px-[100px] py-4  border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  text-center "
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
}
export default Login;