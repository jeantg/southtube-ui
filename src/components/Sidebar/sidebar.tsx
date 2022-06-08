import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { closedSidebarItems, openSidebarItems } from "./enum";

export const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar)
  };

  return (
    <>
      {openSidebar ? (
        <aside className="bg-white fixed top w-[72px] h-screen flex flex-col items-center">
          <button className="mt-4" onClick={handleOpenSidebar}><AiOutlineMenu size={24} /></button>
          <div className="w-full mt-6">
            {closedSidebarItems.map(item =>
              <div key={item.label} className="px-6">
                <button className="flex items-center flex-col justify-center w-full py-4 hover:bg-gray-200 ">
                  {item.icon}
                  <span className="text-xs">{item.label}</span>
                </button>
              </div>
            )}
          </div>
        </aside>
      ) : (
        <aside className="bg-white fixed h-screen flex flex-col ">
          <button className="mt-4 ml-6" onClick={handleOpenSidebar}><AiOutlineMenu size={24} /></button>
          <div className="w-60 mt-6 overflow-y-auto scrollbar">
            {openSidebarItems.map(item =>
              <div key={item.label} className="px-6">
                {item.headerTitle && <p className="py-2 text-gray-500 font-medium">{item.headerTitle}</p>}
                <button className="flex items-center gap-6 h-10 w-full hover:bg-gray-200" >
                  {item.icon}
                  <span className="text-lg truncate">{item.label}</span>
                </button>
                {item.breakList && <div className="border-t my-3" />}
              </div>
            )}
          </div>
        </aside>
      )}
    </>
  )
}