import SidebarButton from "./SidebarButton";
import Link from "next/link";

export default function Sidebar({currentPage, nama, nim}) {
    return( 
        <div className="w-1/4 bg-base-hijau-clr pt-3 h-screen fixed">

            <h1 className="text-white font-bold w-4/5 mx-auto text-lg mb-5">Your Account</h1> 

            <div className="w-4/5 mx-auto bg-hijau-terang rounded-full flex">
                <img src="/default_prof_pic.png" alt=""  className="h-8 ml-2 my-auto"/>
                <div>
                    <p className="pt-1 pl-4 text-white text-xs font-semibold">{nama}</p>
                    <p className="py-1 pl-4 text-white text-xs ">{nim}</p>
                </div>
                <a href="/" className="h-5 ml-3 my-auto ml-auto mr-3"><img src="/logout.png" alt=""  className="h-5 ml-3 my-auto"/></a>
            </div>

            <h1 className="text-white font-bold w-4/5 mx-auto text-lg mb-5 mt-5">Feature</h1> 

            <Link href="/dashboard">
                <SidebarButton identifier="dashboard" text="Dashboard" state={currentPage == "dashboard" ? "active" : ""}></SidebarButton>
            </Link>

            <Link href="/data-pribadi">
                <SidebarButton identifier="data-pribadi" text="Data Pribadi" state={currentPage == "data-pribadi" ? "active" : ""}></SidebarButton>
            </Link>

            <Link href="/data-akademik">
                <SidebarButton identifier="data-akademik" text="Data Akademik" state={currentPage == "data-akademik" ? "active" : ""}></SidebarButton>
            </Link>

            <Link href="/usept">
                <SidebarButton identifier="suliet" text="SULIET/USEPT" state={currentPage == "suliet" ? "active" : ""}></SidebarButton>
            </Link>

            <Link href="/kkn"> 
                <SidebarButton identifier="kkn" text="Pendaftaran KKN" state={currentPage == "kkn" ? "active" : ""}></SidebarButton>
            
            </Link>

            <Link href="/setting-password">
                <SidebarButton identifier="password" text="Setting password" state={currentPage == "password" ? "active" : ""}></SidebarButton>
            </Link>

        </div>
    );
}