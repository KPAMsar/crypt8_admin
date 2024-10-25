import DashboardLayout from "./layouts/dashboardLayout/dashboardLayout";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard";
import BtcTransfer from "./pages/BTC Transfer/btcTransfer";
// import Deposite from "./pages/Deposite/Deposite";
import Notification from "./pages/Notification/notification";
import Profile from "./pages/Profile/profile";
import RateClasses from "./pages/Rate Classes/rateClasses";
import Settings from "./pages/Settings/settings";
import SubAdmin from "./pages/Sub Admin/subAdmin";
import SystemConfiguration from "./pages/System-Configuration/systemConfiguration";
import Transactions from "./pages/Transactions/transactions";
import Users from "./pages/Users/users";
import Wallet from "./pages/Wallet/wallet";
import DashboadGiftCard from "./pages/Dashboard/dashboadGiftCard";
import DashboardDigitalCurrency from "./pages/Dashboard/dashboardDigitalCurrency";
import DashboardFiatCurrency from "./pages/Dashboard/dashboardFiatCurrency";
import DashboardCryptoCurrency from "./pages/Dashboard/dashboardCryptoCurrency";
import Deposite from "./pages/Deposite/deposite";
import CryptoCurrencyTransfer from "./pages/Crypto-Currency-Transfer/cryptoCurrencyTransfer";
import Login from "./pages/Auth/login";
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  { useEffect, useState } from "react";

// type ContextType = string |  [] |boolean;
// const Context = createContext<ContextType | undefined>(undefined);

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const handleSidebar = () => setSideBarOpen(!sideBarOpen);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleNetworkChange = () => {
      setIsOnline(navigator.onLine);
    };

    // Add event listeners for online/offline events
    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);

    return () => {
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
    };
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="login" element={<Login />} />

        <Route
          path="/"
          element={
            <DashboardLayout
              sideBarOpen={sideBarOpen}
              handleSidebar={handleSidebar}
            />
          }
        >
          <Route
            path="/"
            element={<Dashboard handleSidebar={handleSidebar} />}
          />

          <Route path="btc-transfer" element={<BtcTransfer />} />
          <Route
            path="crypto-currency-transfer"
            element={<CryptoCurrencyTransfer />}
          />
          <Route path="deposite" element={<Deposite />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="profile" element={<Profile />} />
          <Route path="rate-classes" element={<RateClasses />} />
          <Route path="settings" element={<Settings />} />
          <Route path="sub-admin" element={<SubAdmin />} />
          <Route
            path="system-configuration"
            element={<SystemConfiguration />}
          />
          <Route path="transactions" element={<Transactions />} />
          <Route path="users" element={<Users />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="gift-card" element={<DashboadGiftCard />} />

          <Route
            path="/digital-currency"
            element={<DashboardDigitalCurrency />}
          />
          <Route path="/fiat-currency" element={<DashboardFiatCurrency />} />
          <Route
            path="/crypto-currrency"
            element={<DashboardCryptoCurrency />}
          />
          <Route path="/gift-card" element={<DashboadGiftCard />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <div className="App">
        {!isOnline && (
          <div>
            {" "}
            <p className="text-[19px] flex justify-center bg-[#fa7575] text-[white]">
              You are currently offline
            </p>
          </div>
        )}
      </div>
      <RouterProvider router={router} />
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

export default App;
