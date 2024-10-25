import BtcRateBox from "../../components/BtcRate";
import CryptoColordCard from "../../components/CryptoColoredCard";
import CryptoCard from "../../components/CryptoCard";
import DashboardBarChart from "../../components/BarChart";
import RecentDepositeTable from "../../components/RecentDepositeTable";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LineGraph from "../../components/LineGraph";
import PieCharts from "../../components/PieCharts";
import { getUserDashboard } from "../../features/api/dashboard/dashboardApi";
import { depositeRes } from "../../features/api/dashboard/dashboardModel";

const Dashboard = ({ handleSidebar }: { handleSidebar: () => void }) => {
  const navigate = useNavigate();

  const [graphTab, setGraph] = useState<number>(0);
  const [transactions, setTransactions] = useState<transactionRes[]>([]);
  const [deposite, setDeposite] = useState<depositeRes[]>([]);
  const [dashboardInfo, setDashboardInfo] = useState();
  const [loadData, setLoadData] = useState(true);

  // const [transactions, setTransactions] = useState();


  const handleGiftCardClick = () => {
    navigate("/gift-card");
  };

  const handleDigitalCurrencyClick = () => {
    navigate("/digital-currency");
  };
  const handleCryptoCurrencyClick = () => {
    navigate("/crypto-currrency");
  };
  const handleFiatClick = () => {
    navigate("/fiat-currency");
  };

  const fetchDashboardDetials = async () => {
    try {
      setLoadData(true);
      const data = await getUserDashboard();
      setTransactions(data?.transactions);
      setDeposite(data?.deposits_tx);
      setDashboardInfo(data);
      console.log("data", data);
    } catch (error) {
      console.log("kkkk", error);
    } finally {
      setLoadData(false);
    }
  };

  useEffect(() => {
    fetchDashboardDetials();
  }, []);

  return (
    <>
      <div className=" lg:mb-[6rem] w-[100dvw] overflow-hidden lg:pl-[48px]    ">
        <div className="pl-[16px]  sm:pr-[20px]">
          <p
            onClick={handleSidebar}
            className=" text-white text-[20px] lg:text-[24px] space-[-0.12px]   lg:pl-[48px] mt-[100px] lg:mt-[61px]  mb-[76px]"
          >
            Welcome Crypt8
          </p>
          <div className="flex lg:hidden  justify-between mb-3">
            <div className=" lg:block ">
              <p className="text-[white] text-[20px] ">Overview</p>
            </div>

            {loadData ? (
              <div className="line line2 loading-animation"></div>
            ) : (
              <div className="d-flex border-[#9CFA4A] border mb-3 mr-3  rounded-lg border-solid p-[auto] bg-[#0E0E0E] w-[161px] h-[36px] items-center justify-center ">
                <p className="text-[#9CFA4A]  items-center justify-center text-[14px] flex">
                  1 BTC = ${dashboardInfo?.btc_price}
                </p>
              </div>
            )}
          </div>

          <div className="lg:flex lg:flex-row lg:mt-8 lg:gap-[47px] flex flex-col   ">
            <div className="flex flex-col gap-[55px]">
              {/* FIRST BOX */}
              <div
                className={`flex rounded-[5px] bg-[#0E0E0E] 
              h-[178px] w-screen  ${
                loadData ? "lg:h-[300px]" : "lg:h-[168px]"
              } xl:h-[168px] lg:w-[867px]   p-[30px]  justify-between  overflow-x-auto`}
              >
                {/* <div className=" lg:flex-col min-w-[120px] lg:min-w-[auto] lg:items-center lg:justify-center lg:p-[29px 14px 29px 40px]  ">
                  <small className="lg:text-[16px] lg:text-[#666]">Total Users</small>
                  <p className="lg:text-[#9CFA4A] lg:text-[35px] lg:font-[600]">329</p>
                </div> */}

                <div className="flex-col  min-w-[200px] lg:min-w-[auto] py-[29px] px-[14px]  ">
                  <small className="text-[16px] text-[#666]">Total Users</small>
                  <p className="text-[#9CFA4A] text-[35px] font-[600]">
                    {loadData ? (
                      <div className="line line2 loading-animation "></div>
                    ) : (
                      dashboardInfo?.users || 0
                    )}
                  </p>
                </div>

                <div className="w-[2px] border-l-2 bg-green"></div>
                <div className="flex-col  min-w-[200px] lg:min-w-[auto]  py-[29px] px-[14px]  ">
                  <small className="text-[16px] text-[#666]">
                    Total Crypto Deposite
                  </small>
                  <p className="text-[#9CFA4A] text-[35px] font-[600]">
                    {loadData ? (
                      <div className="line line2 loading-animation"></div>
                    ) : (
                      deposite?.length
                    )}
                  </p>
                </div>
                <div className="w-[2px] border-l-2 bg-slate-500"></div>
                <div className="flex-col  min-w-[200px] lg:min-w-[auto] py-[29px] px-[14px] ">
                  <small className="text-[16px] text-[#666]">
                    Total Transactions
                  </small>
                  <p className="text-[#9CFA4A] text-[35px] font-[600]">
                    {loadData ? (
                      <div className="line line2 loading-animation"></div>
                    ) : (
                      transactions?.length
                    )}
                  </p>
                </div>
                <div className="w-[2px] border-l-2 bg-slate-500"></div>
                <div className="flex-col   min-w-[200px] lg:min-w-[auto] lg: py-[29px] px-[14px] ">
                  <small className="text-[16px] text-[#666]">
                    Total Rate Class
                  </small>
                  <p className="text-[#9CFA4A] text-[35px] font-[600]">
                    {loadData ? (
                      <div className="line line2 loading-animation "></div>
                    ) : (
                      dashboardInfo?.rates || 0
                    )}
                  </p>
                </div>
              </div>
              <div></div>
              {/* GRAPH */}

              <div className="w-full lg:flex lg:justify-between ">
                <div>
                  <p className="text-[#9CFA4A] my-4 hidden lg:block">
                    Transaction Statistics
                  </p>
                  <p className="text-[#9CFA4A] my-4 block lg:hidden text-[18px] font-[500]  ">
                    Market Growth
                  </p>
                </div>
                <div className="flex text-white lg:gap-6 gap-3 bg-[#0E0E0E] lg:max-h-[40px] max-h-[40px] lg:p-3  items-center rounded-[8px] ">
                  <p
                    className={`min-w-[110px] lg:min-w-[150px] rounded-lg text-center py-[6px] lg:py-[8px] lg:px-[9px]   ${
                      graphTab === 0 ? "bg-[#9CFA4A]" : ""
                    } 
                   `}
                    onClick={() => setGraph(0)}
                  >
                    Line Chart
                  </p>
                  <p
                    className={` min-w-[150px] rounded-lg text-center py-[6px] lg:py-[8px] px-[4px] lg:px-[9px] ${
                      graphTab === 1 ? "bg-[#9CFA4A]" : ""
                    }  `}
                    onClick={() => setGraph(1)}
                  >
                    Histogram
                  </p>
                  <p
                    className={`min-w-[110px] lg:min-w-[150px] rounded-lg text-center py-[6px] lg:py-[8px] lg:px-[9px]   ${
                      graphTab === 2 ? "bg-[#9CFA4A]" : ""
                    } `}
                    onClick={() => setGraph(2)}
                  >
                    Pie Chart
                  </p>
                </div>
              </div>
              {loadData ? (
                <div className="graph-box loading-animation"></div>
              ) : (
                <div className="bg-[#0E0E0] w-[867px] h-[350px]   ">
                  {graphTab === 0 && <DashboardBarChart data={transactions} />}
                  {graphTab === 1 && <LineGraph lineGraphData={transactions} />}
                  {graphTab === 2 && <PieCharts pieChartData={transactions} />}
                </div>
              )}
            </div>

            <div className="lg:flex  lg:space-y-[19px] lg:flex-col space-y-[20px] ">
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

        {loadData ? (
                <div className="graph-box loading-animation"></div>
              ) : <div className=" lg:pl-[48px] lg:w-[1250px] lg:h-[500px] bg-[#0E0E0E]  mt-[40px] lg:mt-[20px] rounded-lg lg:rounded-sm  w-full pr-[10px]">
          <div className="flex justify-between pt-[20px]">
            <h2 className="text-white pl-[27px] lg:pl-[] ">Recent Deposite</h2>
            <h2 className="text-white  pr-[27px] lg:p-[]">View More</h2>
          </div>
          <RecentDepositeTable data={deposite}  />
        </div>}
      </div>
    </>
  );
};
export default Dashboard;
