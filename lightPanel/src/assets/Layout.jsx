import React from "react";
import { Outlet, useLocation} from "react-router-dom";
import Top from "./Top";
import Top2 from "./Top2";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <div>
      {location.pathname === "/" || location.pathname === "/wall1" || location.pathname === "/wall3" || location.pathname === "/wall4" || location.pathname === "/hybec1" || location.pathname === "/hybec2" || location.pathname === "/gatelight"|| location.pathname === "/hanging1"|| location.pathname === "/hanging2" || location.pathname === "/wall5" || location.pathname ==="/nirvana1" || location.pathname === "/nirvana2" || location.pathname ==="/philips"||location.pathname==="/Fan1"|| location.pathname === "/Fan2"|| location.pathname === "/Fan3"|| location.pathname === "/SC1"|| location.pathname === "/Geyser2"|| location.pathname === "/exhaustfan1" || location.pathname === "/Astberg" ? <Top /> 
  : location.pathname === "/nav" || location.pathname === "/nav2"|| location.pathname === "/nav3" || location.pathname === "/nav4"|| location.pathname ==="/navHybec1"|| location.pathname ==="/navHybec2"|| location.pathname ==="/Gatelightnav" || location.pathname ==="/navHanging1"|| location.pathname ==="/navHanging2"|| location.pathname ==="/nav5" || location.pathname === "/navNirvana1" || location.pathname === "/navNirvana2"  || location.pathname ==="/navPhilips"|| location.pathname==="/navFan1" ||location.pathname==="/navFan2" ||location.pathname==="/navFan3" ||location.pathname==="/navSC1"||location.pathname==="/navGeysers1"||location.pathname==="/navExhaustFan1" || location.pathname === "/navAstberg" ? <Top2 /> 
  : null}
        {/* <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded ml-10" onClick={() => navigate("/")}>
          Back
        </button> */}
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
