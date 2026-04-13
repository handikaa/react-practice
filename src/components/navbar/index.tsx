import reactLogo from "../../assets/react.svg";
import "../../App.css";
import { Bell, User, BellDot } from "lucide-react";
import { useState } from "react";
const Navbar = (props: any) => {
  const { userName, userRole, notifStatus, changeNotifStatus, currentMenu, setCurrentMenu } = props;

  return (
    <div className="flex flex-row border-b border-gray-700">
      <div className="basis-2/9 p-4">
        <img src={reactLogo} className="framework inline" alt="React logo" /> <span className="text-white font-bold text-xl ml-2">React Test</span>
      </div>
      <div className="basis-6/9 py-5">
        <div className="flex flex-row gap-x-6 text-white">
          <div
            className={`relative cursor-pointer pb-1 transition   ${currentMenu === "Dashboard" ? "text-white font-semibold" : "text-gray-400 hover:text-white"}
`}
            onClick={() => setCurrentMenu("Dashboard")}
          >
            Dashboard
          </div>
          <div
            className={`hover:opacity-70 cursor-pointer   ${currentMenu === "Analytics" ? "text-white font-semibold" : "text-gray-400 hover:text-white"}
`}
            onClick={() => setCurrentMenu("Analytics")}
          >
            Analytics
          </div>
          <div
            className={`hover:opacity-70 cursor-pointer   ${currentMenu === "Campaigns" ? "text-white font-semibold" : "text-gray-400 hover:text-white"}
`}
            onClick={() => setCurrentMenu("Campaigns")}
          >
            Campaigns
          </div>
          <div
            className={`hover:opacity-70 cursor-pointer   ${currentMenu === "Billing" ? "text-white font-semibold" : "text-gray-400 hover:text-white"}
`}
            onClick={() => setCurrentMenu("Billing")}
          >
            Billing
          </div>
          <div
            className={`hover:opacity-70 cursor-pointer   ${currentMenu === "Help" ? "text-white font-semibold" : "text-gray-400 hover:text-white"}
`}
            onClick={() => setCurrentMenu("Help")}
          >
            Help
          </div>
        </div>
      </div>
      <div className="basis-2/9 place-items-end pr-4">
        <div className="flex flex-row pt-3 gap-x-2 ">
          <div className="bg-blue-900 px-2 py-2 rounded-md cursor-pointer text-white hover:bg-blue-700" onClick={changeNotifStatus}>
            {notifStatus ? <BellDot /> : <Bell />}
          </div>
          <div className="flex flex-row">
            <div className="bg-blue-900 px-2 py-2 rounded-md text-white">
              <User />
            </div>
          </div>
          <div className="flex flex-col">
            <div>{userName}</div>
            <div className="text-xs">{userRole}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
