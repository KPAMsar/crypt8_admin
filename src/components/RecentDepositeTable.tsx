import RoundPhotoIcon from '../assets/Icons/roundPhotoIcon.png';


const RecentDepositeTable = () => {
  const data =[1,2,3,4,5]
  return (
    <>
      <div className="flex w-full overflow-x-auto mt-[3rem] mb-[3rem]">
        <table className="table w-full pb-[60px]"  >
          <thead className="text-white">
            <tr>
              {/* <th>Type</th>
              <th>Where</th>
              <th>Description</th>
              <th>Amount</th> */}
            </tr>
          </thead>
          <tbody className='bg-[#0E0E0E] '>
            {data.map((items) =>(
              <tr  style={{border:'none'}}>
              <th style={{border:'none'}} className='p-[1rem]'><img src={RoundPhotoIcon}  alt="" /></th>
              <td style={{border:'none'}} className='p-[1rem] text-[#787878]'>Kpamsar Shija</td>
              <td style={{border:'none'}}  className='p-[1rem]  text-[#787878]'>Deposited $4230 </td>
              <td style={{border:'none'}} className='p-[1rem]  text-[#787878]'>01/23/2023</td>
              <td style={{border:'none'}} className='p-[1rem]  text-[#787878]'>
              <button className="btn bg-[#9CFA4A2B] text-[#9CFA4A]">Success</button>
              </td>
              </tr>
            ))}
           
         
          </tbody>
        </table>
      </div>
    </>
  );
};
export default RecentDepositeTable;
