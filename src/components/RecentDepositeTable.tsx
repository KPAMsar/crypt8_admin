import RoundPhotoIcon from '../assets/Icons/roundPhotoIcon.png';



const RecentDepositeTable = ({data}) => {
console.log('this is data from ',data
)

  
  return (
    <>
      <div className="flex lg:w-full overflow-x-auto lg:mt-[3rem] lg:mb-[3rem] pl-[16px] mb-[60px]  ">
       
        <table className="table w-full pb-[60px]"  >
          <thead className="text-white">
            <tr>
              {/* <th>Type</th>
              <th>Where</th>
              <th>Description</th>
              <th>Amount</th> */}
            </tr>
          </thead>
          <tbody className='bg-[#0E0E0E]  pb-[10px]'>
            {data.map((item,id) =>(
              <tr  key={id} style={{border:'none'}}>
              <th style={{border:'none'}} className='p-[1rem]'><img src={RoundPhotoIcon}  alt="" /></th>
              <td style={{border:'none'}} className='p-[1rem] text-[#787878]'>{item?.firstname}{item?.lastname}</td>
              <td style={{border:'none'}}  className='p-[1rem]  text-[#787878]'>{item?.tag || 'Null'}</td>
              <td style={{border:'none'}} className='p-[1rem]  text-[#787878]'>{item?.cash_value  }</td>
              <td style={{border:'none'}} className='p-[1rem]  text-[#787878]'>
              <button className={`btn  ${item?.status !== '1' ? 'bg-[#e69292] text-[red] ': item?.status === '1' ? 'bg-[#9CFA4A2B] text-[#9CFA4A]' : ''} `}> { item?.status === '1' ? 'Success' : ' Failed'}</button>
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
