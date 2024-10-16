import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";

export default function MainOutlet() {
  return (
    <div className="grid grid-cols-20 bg-white">
      <SideBar />
      <main className="h-[100svh] overflow-scroll overflow-x-hidden overflow-y-auto xl:col-span-17 col-span-20 flex flex-col">
        <NavBar />
        <Outlet />
      </main>
    </div>
  );
}
