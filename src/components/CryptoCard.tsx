import ArrowRightIcon from '../assets/Icons/arrow-right.svg';

type CryptoCardProps = {
    currency: string;
    color: string;
    borderColor: string
    textColor:string
    click: ()=>void
}

const CryptoCard = ({currency, click, borderColor}: CryptoCardProps) => {


    return (
    <>
      <div
      
        className={`w-[370px] sm:w-[100%] lg:w-[320px] sm:h-[160px]  h-[100px] lg:h-[124px] flex items-center justify-between  bg-[#0E0E0E] 
        opacity-90 border border-[${borderColor}] border-none rounded-sm gap-3 pl-[20px] pr-[20px]` } 
        onClick={click}
      >
        <p className={`text-[#fff]   text-[24px]`}>{currency}</p> 
        <div className='p-[10px] bg-[#2E2727] rounded-[8px]' >
        <img src={ArrowRightIcon} alt="" />
        </div>
      </div>
    </>
  );
};

export default CryptoCard;
