import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { openSidebarItems } from "./enum";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar)
  };

  return (
    <aside className={`bg-white h-screen flex flex-col ${openSidebar && "top w-[72px] items-center"}`}>
      <button className={`${openSidebar ? "mt-4" : "mt-4 ml-6"}`} onClick={handleOpenSidebar}><AiOutlineMenu size={24} /></button>
      <div className={` mt-6 ${openSidebar ? "w-full" : "w-60 overflow-y-auto scrollbar"}`}>
        {openSidebarItems.map(item =>
          <div key={item.label} className="px-6 hover:bg-gray-200">
            {item.headerTitle && !openSidebar && <p className="py-2 text-gray-500 font-medium">{item.headerTitle}</p>}
            <button className={`flex items-center w-full ${openSidebar ? "flex-col justify-center py-4" : "gap-6 h-10"} ${openSidebar && !item.showClosed && "hidden"}`}>
              {item.icon}
              <span className={openSidebar ? "text-xs" : "text-lg truncate"}>{item.label}</span>
            </button>
            {item.breakList && !openSidebar && <div className="border-t my-3" />}
          </div>
        )}
      </div>
    </aside>
  )
}

export default Sidebar;