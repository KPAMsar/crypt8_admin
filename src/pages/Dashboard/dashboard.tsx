
import BtcRateBox from "../../components/BtcRate";
import CryptoColordCard from "../../components/CryptoColoredCard";
import CryptoCard from "../../components/CryptoCard";
import DashboardBarChart from "../../components/BarChart";
import RecentDepositeTable from "../../components/RecentDepositeTable";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { LineChart } from "recharts";
import { useNavigate } from "react-router-dom";


const Dashboard = ({ handleSidebar }: { handleSidebar: () => void }) => {

  const navigate = useNavigate();

  const [graphTab, setGraph] = useState<number>(0)

  const handleGiftCardClick = ()=>{
    navigate('/gift-card')

  }

  const handleDigitalCurrencyClick = ()=>{
    navigate('/digital-currency')
  }
  const handleCryptoCurrencyClick = ()=>{
    navigate('/crypto-currrency')

  }
  const handleFiatClick = ()=>{
    navigate('/fiat-currency')

  }




  return (
    <>
      <div className=" mb-[6rem]">
        <div className="pl-[48px] ">
          <p
            onClick={handleSidebar}
            className=" text-white text-[24px] space-[-0.12px] pl-[48px] mt-[61px]"
          >
            Welcome Crypt8
          </p>
          <GiHamburgerMenu />
          <div className="flex mt-8 gap-[47px] ">
            <div className="flex flex-col gap-[55px]">
              {/* FIRST BOX */}
              <div className="flex  rounded-[5px] bg-[#0E0E0E]  h-[168px] w-[867px] p-[30px] justify-between">
                <div className="flex-col p-[29px 14px 29px 40px]  ">
                  <small className="text-[16px] text-[#666]">Total Users</small>
                  <p className="text-[#9CFA4A] text-[35px] font-[600]">329</p>
                </div>
                <div className="w-[2px] border-l-2 bg-green"></div>
                <div className="flex-col p-[29px 14px 29px 40px]  ">
                  <small className="text-[16px] text-[#666]">
                    Total Crypto Deposite
                  </small>
                  <p className="text-[#9CFA4A] text-[35px] font-[600]">329</p>
                </div>
                <div className="w-[2px] border-l-2 bg-slate-500"></div>
                <div className="flex-col p-[29px 14px 29px 40px] ">
                  <small className="text-[16px] text-[#666]">
                    Total Transactions
                  </small>
                  <p className="text-[#9CFA4A] text-[35px] font-[600]">329</p>
                </div>
                <div className="w-[2px] border-l-2 bg-slate-500"></div>
                <div className="flex-col p-[29px 14px 29px 40px] ">
                  <small className="text-[16px] text-[#666]">
                    Total Rate Class
                  </small>
                  <p className="text-[#9CFA4A] text-[35px] font-[600]">329</p>
                </div>
              </div>
              <div></div>
              {/* GRAPH */}

              <div className="w-full flex justify-between">
                <div>
                  <p className="text-[#9CFA4A] my-4">Transaction Statistics</p>
                </div>
                <div className="flex text-white gap-6  bg-[#0E0E0E] max-h-[40px] p-3 items-center rounded-[8px]">
                  <p className={` min-w-[150px] rounded-lg text-center py-[8px] px-[9px]   ${graphTab === 0 ? 'bg-[#9CFA4A]' :'' } 
                   `} onClick={ ()=>setGraph(0)}>
                    Line Chart
                  </p>
                  <p className={` min-w-[150px] rounded-lg text-center py-[8px] px-[9px] ${graphTab === 1 ? 'bg-[#9CFA4A]' :'' }  `}  onClick={ ()=>setGraph(1)}>
                    Histogram
                  </p>
                  <p className={` min-w-[150px] rounded-lg text-center py-[8px] px-[9px]   ${graphTab === 2 ? 'bg-[#9CFA4A]' :'' } `}  onClick={ ()=>setGraph(2)}>
                    Pie Chart
                  </p>
                </div>
              </div>
              <div className="bg-[#0E0E0] w-[867px] h-[350px]   ">
                
                { graphTab === 0 && <DashboardBarChart />}
                { graphTab === 1 && <LineChart />}
                { graphTab === 2 && <DashboardBarChart />}
                

              </div>
            </div>
            <div className="flex space-y-[19px] flex-col">
              <BtcRateBox />
              <CryptoColordCard
                currency="Digital Currency"
                color="red"
                borderColor="#9CFA4A"
                textColor="#9CFA4A"
                click={handleDigitalCurrencyClick}
              />
              <CryptoCard
                currency="Fiat Currency"
                color="white"
                borderColor="none"
                textColor={""}
                click={handleFiatClick}
              />
              <CryptoCard
                currency="Crypto Currency "
                color="white"
                borderColor="none"
                textColor={""}
                click={handleCryptoCurrencyClick}
              />
              <CryptoCard
                currency="Gift Card "
                color="white"
                borderColor="none"
                textColor={""}
                click={handleGiftCardClick}
              />
            </div>
          </div>
        </div>

        <div className=" pl-[48px] w-[1280px] h-[350px] bg-[#0E0E0]   rounded-sm">
          <h2 className="text-white">Recent Deposite</h2>
          <RecentDepositeTable />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
