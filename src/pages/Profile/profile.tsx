// import RoundPhotoIcon from '../../assets/Icons/roundPhotoIcon.png';
import SearchIcon from '../../../src/assets/Icons/searchIcon.svg';





const Profile = () => {


    const data = [1, 2, 3, 4, 5]
    return (
        <>
            <div className="p-[66px]">
                <div>
                    <p className=" text-[white] pb-[78px] text-[24px]">Profile</p>
                </div>

                <div className='flex justify-between  pb-7'>
                    <div className='border border-none bg-[#0E0E0E] w-[670px] rounded-lg h-[60px] items-center  flex justify-between'>
                      <p className='text-[#9C9696] justify-center items-center pl-3'>Search Bookings</p>
                      <div className='items-center'>
                      <img src={SearchIcon} alt="" className='items-center pr-3' />
                      </div>
                    </div>
                    <p style={{
                            background:
                                "linear-gradient(40deg, #9CFA4A2B 2%, rgba(156, 250, 74, 0.00) 65%) ",
                        }} className='text-[#9CFA4A]  p-2 px-[150px] py-4  border border-1 border-[#9CFA4A2B]   bg-[#9CFA4A2B]  '  >Add Profile</p>
                  </div>

                <div className='bg-[#0E0E0E]'>

                 


                    <table className="table w-full pb-[60px] pt-[56px] mt-[56px]"  >
                        <thead className="text-white ">
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email </th>
                            <th>Phone Number</th>
                            <th>Role</th>
                            
                        </thead>
                        <tbody className=''>
                            {data.map((items) => (
                                <tr style={{ border: 'none', justifyItems: ' center' }} className='text-center'>
                                    <td style={{ border: 'none' }} className='p-[1rem] text-center text-[#787878]'>Fazak</td>
                                    <td style={{ border: 'none' }} className='p-[1rem]  text-[#787878]'>Fazak </td>
                                    <td style={{ border: 'none' }} className='p-[1rem]  text-[#787878]'>Fazak </td>
                                    <td style={{ border: 'none' }} className='p-[1rem]  text-[#787878]'>Fazak </td>
                                    <td style={{ border: 'none' }} className='p-[1rem]  text-[#787878]'>Fazak </td>
                                  
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            </div>




    
        </>
    );
}

export default Profile;