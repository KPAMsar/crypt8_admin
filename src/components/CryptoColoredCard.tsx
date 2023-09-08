import ArrowRightIcon from '../assets/Icons/arrow-right.svg';

type CryptoColoredCardProps = {
    currency: string;
    color: string;
    borderColor: string
    textColor:string
    click: () => void
}


const CryptoColordCard = ({currency,  click, borderColor, textColor}: CryptoColoredCardProps) => {


    return (
    <>
      <div
        style={{
          background:
            "linear-gradient(120deg, #9CFA4A 0%, rgba(156, 250, 74, 0.00) 55%) ",
        }}
        className={`w-[370px] sm:w-[100%] sm:h-[160px] lg:w-[320px] h-[100px] lg:h-[124px] flex items-center justify-between bg-[#0E0E0E] 
        opacity-90 border border-[${borderColor}] border-1 rounded-sm pl-[20px] pr-[20px] `}
        
        onClick={click}
      >
        <p className={`text-[${textColor}]   text-[24px]`}>{currency}</p>
        <div className='p-[10px] bg-[#2E2727] color-[red] rounded-[8px]' >
        <img src={ArrowRightIcon} alt=""  color='#9CFA4A'/>
        </div>
      </div>
    </>
  );
};

export default CryptoColordCard;
