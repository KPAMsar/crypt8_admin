import { BiBarChartAlt2, BiUserCircle } from "react-icons/bi";
import { HiOutlineLogout, HiOutlineUsers } from "react-icons/hi";
import { TbReceipt } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiHeadphonesBold } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { TbCreditCard } from "react-icons/tb";


// icons
import HomeIcon from '../assets/Icons/homeIcon.png';
import ProfileIcon from '../assets/Icons/userIcon.png';
import UsersIcon from '../assets/Icons/usersIcon.png';
import WalletIcon from '../assets/Icons/wallentIcon.svg';
import NotificationIcon from '../assets/Icons/notificationIcon.png';
import TransactionsIcon from '../assets/Icons/transactionsIcon.png';
import LogoutIcon from '../assets/Icons/logoutIcon.png';
import SettingsIcon from '../assets/Icons/settingsIcon.png';
import SystemConfigIcon from '../assets/Icons/systemConfiIcon.png';
import SubAdminIcon from '../assets/Icons/subAdminIcon.png';
import DepositeIcon from '../assets/Icons/depositeIcon.png';
import RateClassesIcon from '../assets/Icons/rateClassesIcon.png';
import BTCIcon from '../assets/Icons/bitcoinIcon.png';


export const links = [
  {
    title: "Dashboard",
    link: "",
    icon: <img src={HomeIcon} alt="" />,
  },
  {
    title: "Profile",
    link: "profile",
    icon: <img src={ProfileIcon} alt="" />,
  },
  {
    title: "Deposits",
    link: "deposite",
    icon: <img src={DepositeIcon} alt="" />,
  },
  {
    title: "Transactions",
    link: "transactions",
    icon: <img src={TransactionsIcon} alt="" />,
  },
  {
    title: "Users",
    link: "users",
    icon: <img src={UsersIcon} alt="" />, 
  },
  {
    title: "Notification",
    link: "notifications",
    icon: <img src={NotificationIcon} alt="" />,
  },
  {
    title: "Sub Admin",
    link: "sub-admin",
    icon: <img src={SubAdminIcon} alt="" />,
  },
  {
    title: "Rate Classes",
    link: "rate-classes",
    icon: <img src={RateClassesIcon} alt="" />,
  },
  {
    title: "Wallet",
    link: "wallet",
    icon: <img src={WalletIcon} alt="" />,
  },
  {
    title: "Crypto Currency Transfer",
    link: "crypto-currency-transfer",
    icon: <img src={BTCIcon} alt="" />,
  },
  {
    title: "Settings",
    link: "settings",
    icon: <img src={SettingsIcon} alt="" />,
  },
  {
    title: "System  Configuration",
    link: "system-configuration",
    icon: <img src={SystemConfigIcon} alt="" />,
  },
  {
    title: "Logout",
    link: "logout",
    icon: <img src={LogoutIcon} alt="" />,
    style: { color: " #B71E41" },
  },
];
