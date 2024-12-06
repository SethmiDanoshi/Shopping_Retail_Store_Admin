import { createContext, useContext, useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";


const Sidebarcontext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={`h-screen ${expanded ? "w-64" : "w-20"} transition-all`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <h3
            className={`overflow-hidden transition-all text-blue-700 font-bold italic text-2xl ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          >
            Aura Mart
          </h3>

          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? (
              <KeyboardArrowLeftIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </button>
        </div>

        <Sidebarcontext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 space-y-2">{children}</ul>
        </Sidebarcontext.Provider>
        
            

            
          
      
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert, onClick }) {
  const { expanded } = useContext(Sidebarcontext);

  return (
    <li
      onClick={onClick}
      className={`
        relative flex items-center py-2 px-3 my-1 
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-blue-200 to-blue-100 text-blue-800"
            : "hover:bg-blue-50 text-gray-600"
        }
      `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-blue-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}
    </li>
  );
}

  