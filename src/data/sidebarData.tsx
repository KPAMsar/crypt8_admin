import { BiBarChartAlt2, BiUserCircle } from "react-icons/bi";
import { HiOutlineLogout, HiOutlineUsers } from "react-icons/hi";
import { TbReceipt } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiHeadphonesBold } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { TbCreditCard } from "react-icons/tb";


export const links = [
  {
    title: "Dashboard",
    link: "",
    icon: <RxDashboard />,
  },
  {
    title: "Profile",
    link: "profile",
    icon: <HiOutlineUsers />,
  },
  {
    title: "Deposits",
    link: "deposite",
    icon: <PiHeadphonesBold />,
  },
  {
    title: "Transactions",
    link: "transactions",
    icon: <TbCreditCard />,
  },
  {
    title: "Users",
    link: "users",
    icon: <TbCreditCard />,
  },
  {
    title: "Notification",
    link: "notifications",
    icon: <MdOutlineShoppingCart />,
  },
  {
    title: "Sub Admin",
    link: "sub-admin",
    icon: <BiBarChartAlt2 />,
  },
  {
    title: "Rate Classes",
    link: "rate-classes",
    icon: <TbReceipt />,
  },
  {
    title: "Wallet",
    link: "wallet",
    icon: <BiUserCircle />,
  },
  {
    title: "BTC Transfer",
    link: "btc-transfer",
    icon: <BiUserCircle />,
  },
  {
    title: "Settings",
    link: "settings",
    icon: <BiUserCircle />,
  },
  {
    title: "System  Configuration",
    link: "system-configuration",
    icon: <BiUserCircle />,
  },
  {
    title: "Logout",
    link: "",
    icon: <HiOutlineLogout />,
    style: { color: " #B71E41" },
  },
];
