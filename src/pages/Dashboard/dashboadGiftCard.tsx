import RoundPhotoIcon from '../../assets/Icons/roundPhotoIcon.png';
import SearchIcon from '../../../src/assets/Icons/searchIcon.svg';
import UpDownIcon from '../../assets/Icons/searchUpandDownArrow.svg';
import ThreeDots from '../../../src/assets/Icons/thress-dots.svg';
import { AiOutlineClose } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { LineWave, RotatingLines } from "react-loader-spinner";
import { useEffect, useState } from 'react';
import { getGiftCardCurrency, deleteGiftCards } from '../../features/api/gift-card/giftCardApi';
import { GiftCardSingleData, GiftCardCurrencyRes } from '../../features/api/gift-card/giftCardModel';
import { addGiftCardCurrency } from '../../features/api/gift-card/giftCardApi';
import ReactPaginate from "react-paginate";
// import { GiftCardCurrencyRes } from '../../features/api/gift-card/giftCardModel';


const DashboadGiftCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [giftCard, setGiftCard] = useState<GiftCardCurrencyRes[]>([]);
    const [currencyName, setCurrencyName] = useState('');
    const [currencyImage, setCurrencyImage] = useState('');
    const [rotate, setRotate] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imageName, setImageName] = useState(false);
    const [selectedId, setSelectedId] = useState('');
    const [update, setUpdate] = useState(false);
    const [updateId, setUpdateId] = useState('');
    const [deleteing, setDeleting] = useState(false);
    // const [deleteSuccess, setDeleteSuccess]=useState(false);
    // const [show,setShow]= useState(false);



    const initModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const [show, setShow] = useState(false);
    //   [hide,setHide] = useState(false);
    console.log(show)



    const fetchAllGiftCard = async () => {
        setRotate(true);
        try {
            const {cards} = await getGiftCardCurrency();
            setRotate(false);
            console.log('fetched data',cards)
            
            setGiftCard(cards);
            

            console.log('cards digital currecny', giftCard);

        }
        catch (error) {
            console.log('errir', error);
        }
    }

    const handleFileChange = (e) => {
        const files = e.target.files[0];
        setImageName(files.name)
        setCurrencyImage(files);
    }

    const handleAddGiftCards = async (e) => {
        e.preventDefault();

        if (!currencyName) {
            toast.error('Currency Name is required');
            console.log('name', currencyName)
            return;
        }

        if (!currencyImage) {
            toast.error('Currency Image is needed');
            return;
        }
        setLoading(true);
        // console.log('currencyy',currencyImage)
        const formData = new FormData();
        formData.append('name', currencyName);
        formData.append('image', currencyImage);
        console.log('form data', formData)

        try {
            const response = await addGiftCardCurrency(formData);
            console.log('Response from addCryptoCurrency:', response);

            toast.success('Currency added successful');
            closeModal();
            setCurrencyName('');
            setCurrencyImage(null);
            setLoading(false);
            setIsModalOpen(false);

        } catch (error) {
            setLoading(false);
            console.error('Error adding crypto currency:', error);
        }
        finally {
            setShow(false)
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!currencyName) {
            toast.error('Currency Name is required');
            return;
        }

        try {
            const response = await updateFiatCurrency(currencyName, updateId);
            console.log('Response from  update CryptoCurrency:', response);

            toast.success('Currency updated successful');
            closeModal();
            setCurrencyName('');
            setCurrencyImage(null);
            setLoading(false);
            setIsModalOpen(false);

        } catch (error) {
            setLoading(false);
            console.error('Error adding crypto currency:', error);
        }
    }

    const handleDelete = async (e) => {
        
        e.preventDefault();
        setDeleting(true)
        try {
            const data = await deleteGiftCards(selectedId);
            console.log('data from delete', data);
            toast.success(data?.message)
        } catch (error) {
            console.error(error);
            return error;

        }
        finally{
            setDeleting(false)
        }
    }



    
    const [PerItem, setPerItem] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  //   Start for Pagination
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * Number(PerItem);
  const currentItem = giftCard?.slice(offset, offset + Number(PerItem));
  const pageCount = Math.ceil(giftCard?.length / Number(PerItem));
//   End of Pagination





    useEffect(() => {

        fetchAllGiftCard();

    }, [])


    return (
        <>
            <div className="lg:mb-[6rem] w-[100dvw] lg:w-[100%] overflow-hidden md:pl-[30px] pr-[10px] pl-[10px] md:pr-[30px] lg:pl-[48px] mt-[100px] lg:mt-[100px] lg:pr-[40px]">
                <div>
                    <p className=" text-[white] pb-[78px] text-[20px] font-[600]">Gift Card List</p>
                </div>

                <div className='lg:bg-[#0E0E0E]'>

                    <div className='flex justify-between lg:p-[35px] pb-[10px]'>
                        <p className='text-[white]'></p>
                        <p style={{
                            background:
                                "linear-gradient(40deg, #9CFA4A2B 2%, rgba(156, 250, 74, 0.00) 65%) ",
                        }} className='text-[#9CFA4A]  p-2 lg:px-[150px] px-[90px] py-[15px] lg:py-4  border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  ' onClick={() => setShow(true)} >Add Gift Card</p>
                        {/* <label className="btn btn-primary" htmlFor="modal-1">Open Modal</label> */}
                    </div>

                    <div className="flex justify-between p-[35px] bg-[#0E0E0E] lg:bg-[]">
                        <p className="text-[white] text-[20px] ">Gift Card</p>
                        <div className="flex gap-4 justify-between lg:hidden">
                            <img src={SearchIcon} alt="" />
                            <img src={ThreeDots} alt="" />
                        </div>
                    </div>

                    <div className='lg:flex justify-between p-[35px] hidden '>
                        <div className='flex text-[#9CFA4A]  gap-4  items-center '>
                            <p>Show</p>
                            <div className='border border-2 border-[#9CFA4A2B] w-[176px] rounded-lg  h-[40px]'>
                                <img src={UpDownIcon} alt="" />
                            </div>
                            <p>Entries</p>
                        </div>

                        <div className='flex  justify-start flex-start rounded-lg gap-2 text-[#9CFA4A]  p-2 px-[100px] border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  '>
                            <img src={SearchIcon} alt="" /> Search
                        </div>
                    </div>

                    {/* <label className="btn btn-primary" htmlFor="modal-1">Open Modal</label> */}

                    <div className='overflow-x-auto'>
                        <table className="table w-full pb-[60px] bg-[#0E0E0E] lg:bg-[]"  >
                            <thead className="text-white ">
                                <th>S/N</th>
                                <th>Logo</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </thead>
                            <tbody className='bg-[#0E0E0E]  '>
                                
                                {currentItem.length > 0 ? 
                                (currentItem?.map((item, index) => (
                                    <tr style={{ border: 'none', justifyItems: ' center' }}>
                                        <th style={{ border: 'none', paddingLeft: '3rem' }} className='p-[1rem] '>{index + 1}</th>
                                        <th style={{ border: 'none' }} className='p-[1rem]'><img src={RoundPhotoIcon} alt="" /></th>
                                        <td style={{ border: 'none' }} className='p-[1rem] text-[#787878]'>{item?.name}</td>
                                        <td style={{ border: 'none' }} className='p-[1rem]  text-[#787878]'>{item?.status === '1' ? 'Successful' : 'Pending'}</td>
                                        <td style={{ border: 'none' }} className='p-[1rem]  text-[#787878]'>
                                            <button className="btn bg-[#9CFA4A2B]  mx-auto block text-[#9CFA4A]" onClick={ ()=> {setUpdate(true); setUpdateId(item?.id)} }>Edit</button>
                                        </td>
                                        {/* <td style={{ border: 'none' }} className='p-[1rem]  text-[#787878]'>
                                            <button className="btn  mx-auto block bg-[#DA0808] text-[#f0a9a9]"   htmlFor="modal-1">Delete</button>
                                        </td> */}
                                        <td style={{ border: 'none' }} className='p-[1rem] text-[#787878]'>
                                            <label htmlFor="modal-1" className="btn mx-auto 
                                                bg-[#DA0808] text-[#f0a9a9]" onClick={() => setSelectedId(item.id)}>
                                                Delete
                                            </label>
                                        </td>

                                    </tr>
                                ))): (
                                    <div>No Records</div>
                                  )}
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
                       


                        {rotate && <div className='flex justify-center items-center w-full bg-[#0E0E0E] '>
                            <LineWave color="red" middleLineColor="green" lastLineColor="green" />
                        </div>
                        }
                    </div>
                </div>
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
                            Add Digital Currency
                        </h2>
                        <div className="flex  flex-col gap-4 ">
                            <form onSubmit={handleAddGiftCards} encType="multipart/form-data">
                                <div className='bg-[#0E0E0E]'>
                                    <small className=" text-[#666666] text-[12px] p-4   ">
                                        {" "}
                                        Currency Name
                                    </small>
                                    <input id="currencyName" name="currencyName" value={currencyName} className=" bg-[#0E0E0E]  text-[white]  lg:h-[60px] h-[50px] mb-[30px]  justify-between flex flex-col justify-item p-4 lg:p-4 gap-3 w-[100%] h-[120px]" onChange={(e) => { setCurrencyName(e.target.value) }} />
                                </div>



                                <div className=" bg-[#0E0E0E] justify-between h-[90px] flex flex-col justify-item p-4 mb-3 lg:p-4 gap-1 lg:gap-3 w-[100%]">
                                    <small className=" text-[#666666]  text-[12px] ">
                                        {" "}
                                        Currecncy Logo
                                    </small>

                                    <div className='  justify-center'>
                                        <label htmlFor="app" ><input type="file" accept="images/*" onChange={handleFileChange} id="app" hidden />
                                            <p className={`${imageName ? ' w-[auto]' : 'w-[110px]'} text-white text-[16px] border  border-[#9CFA4A] p-[7px] rounded-lg`}>{!imageName ? 'Choose File' : imageName}</p>
                                        </label>


                                    </div>
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
                                        Save <LineWave color="red" height="60" width="60" middleLineColor="green" lastLineColor="green" />
                                    </div>}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* //UPDATE FIAT CURRENCY */}
            <div
                className={`h-[100dvh]  items-center w-[95%]   md:w-[500px] rounded-lg lg:h-[854px] lg:w-[749px]  lg:absolute lg:right-[0px] flex justify-center lg:justify-items-end bg-[#010101]  shadow-lg   z-30 lg:backdrop-blur-md backdrop-blur-md fixed top-2 lg:top-4    lg:right-[0%] right-[2.5%] lg:right-7 transform ${update ? "translate-y-0" : "-translate-y-[-200%] "
                    } transition-transform duration-300 ease-in-out pb-[30px]`}
            >
                {/* modal content goes here */}
                <div className="p-3 w-full">
                    <div
                        className="flex  justify-between pl-[40px] lg:pl-[32rem]"
                        onClick={() => setUpdate(false)}
                    >

                        {/* <img src={ModalCloseIcon} alt="" /> */}
                        <AiOutlineClose className=" text-[30px] items-end text-[#9CFA4A] font-[700] absolute top-[20px] right-[30px]" />
                    </div>
                    <div>
                        <h2 className=" text-[#FFFFFF]  text-[24px] text-center pt-[40px] pb-[50px]">
                            Update Digital Currency
                        </h2>
                        <div className="flex  flex-col gap-4 ">
                            <form onSubmit={handleUpdate} encType="multipart/form-data">
                                <div className='bg-[#0E0E0E]'>
                                    <small className=" text-[#666666] text-[12px] p-4   ">
                                        {" "}
                                        Currency Name
                                    </small>
                                    <input id="currencyName" name="currencyName" value={currencyName} className=" bg-[#0E0E0E]  text-[white]  lg:h-[60px] h-[50px] mb-[30px]  justify-between flex flex-col justify-item p-4 lg:p-4 gap-3 w-[100%] h-[120px]" onChange={(e) => { setCurrencyName(e.target.value) }} />
                                </div>



                                {/* <div className=" bg-[#0E0E0E] justify-between h-[90px] flex flex-col justify-item p-4 mb-3 lg:p-4 gap-1 lg:gap-3 w-[100%]">
                                    <small className=" text-[#666666]  text-[12px] ">
                                        {" "}
                                        Currecncy Logo
                                    </small>

                                    <div className='  justify-center'>
                                        <label htmlFor="app" ><input type="file" accept="images/*" onChange={handleFileChange} id="app" hidden  />
                                            <p className={`${imageName?' w-[auto]' : 'w-[110px]'} text-white text-[16px] border  border-[#9CFA4A] p-[7px] rounded-lg`}>{ !imageName ? 'Choose File':imageName}</p>
                                        </label>


                                    </div>
                                </div> */}



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
                                        Save <LineWave color="red" height="60" width="60" middleLineColor="green" lastLineColor="green" />
                                    </div>}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            {/* DELETE MODAL */}
            <div>
                <input className="modal-state" id="modal-1" type="checkbox" />
                <div className="modal">
                    <label className="modal-overlay" htmlFor="modal-1"></label>
                    <div className={`modal-content flex flex-col gap-5 bg-[#262626] ${deleteing ? 'w-[380px] ' : 'w-auto'}`}>

                        <label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-[white]">✕</label>
                        <h2 className="text-xl text-[white]">Delete </h2>
                        {!deleteing && <span className='text-[white]'>Are you sure you want to delete item?</span>}
                        {deleteing && <div className='flex justify-center items-center w-full '>
                            <span className='text-[white] '>Deleting Gift Card </span>
                            <LineWave color="red" height="60" width="60" middleLineColor="green" lastLineColor="green" />
                        </div>}
                        {!deleteing && <div className="flex gap-3">
                            <button className="btn btn-error btn-block bg-[#DA0808] " onClick={handleDelete}>Delete</button>
                            <label htmlFor="modal-1" className="btn  btn-block " > Cancel</label>
                            {/* <button className="btn btn-block">Cancel</button> */}
                        </div>}
                    </div>
                </div>
            </div>

            <div>
                <input className="modal-state" id="modal-1" type="checkbox" />
                <div className="modal">
                    <label className="modal-overlay" htmlFor="modal-1"></label>
                    <div className="modal-content flex flex-col gap-5 bg-[#262626]">
                        {deleteing && <div className='flex justify-center items-center w-full '>
                            Save <LineWave color="red" height="60" width="60" middleLineColor="green" lastLineColor="green" />
                        </div>}
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

export default DashboadGiftCard;