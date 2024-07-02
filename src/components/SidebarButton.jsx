'use client'
import { useState } from "react";
import Link from "next/link";
export default function SidebarButton({text, identifier, state}) {
    const [clicked, setClicked] = useState(state == "active" ? true : false)

    if(identifier == "data-akademik") {
        return(
            <>
            <div className={"w-4/5 mx-auto mt-3 mb-1 "+ (state == "active" ? "bg-kuning-terang" : "bg-hijau-terang") +" rounded-full flex cursor-pointer"} onClick={() => setClicked(!clicked)}>
                <img src={"/logo-sidebar/"+identifier+"-"+(state == "active" ? "aktif" : "nonaktif")+".png"} alt=""  className="h-8 ml-2 my-auto"/>
                <p className={"py-3 pl-4 "+ (state == "active" ? "text-black" : "text-white") + " text-xs font-semibold"}>{text}</p>
                {clicked ? 
                <img src={"/logo-sidebar/arrow-up-"+(state == "active" ? "aktif" : "nonaktif")+".png"} alt="" className="h-5 ml-auto my-auto mr-4"/> 
                : 
                <img src={"/logo-sidebar/arrow-down-"+(state == "active" ? "aktif" : "nonaktif")+".png"} alt="" className="h-5 ml-auto my-auto mr-4"/>}
                
            </div>
            {clicked ? 
                <div className={"w-4/5 mx-auto bg-hijau-terang rounded-md"}>
                    <Link href="/data-akademik/krs" className="flex">
                        <img src={"/logo-sidebar/kartu.png"} alt=""  className="h-4 ml-4 my-2"/>
                        <p className={"my-auto pl-4 text-white text-xs font-semibold"}>Kartu Rencana Studi</p>
                    </Link>
                    <Link href="/data-akademik/khs" className="flex">
                        <img src={"/logo-sidebar/kartu.png"} alt=""  className="h-4 ml-4 my-2"/>
                        <p className={"my-auto pl-4 text-white text-xs font-semibold"}>Kartu Hasil Studi</p>
                    </Link>
                    <Link href="/data-akademik/transkrip" className="flex">
                        <img src={"/logo-sidebar/kartu.png"} alt=""  className="h-4 ml-4 mt-2 mb-3"/>
                        <p className={"my-auto pl-4 text-white text-xs font-semibold"}>Transkrip Nilai</p>
                    </Link>
                </div>
            : 
            ""}
            
            </>
        );
} else {

    return(
        <div className={"w-4/5 mx-auto my-3 "+ (state == "active" ? "bg-kuning-terang" : "bg-hijau-terang") +" rounded-full flex"} >
            <img src={"/logo-sidebar/"+identifier+"-"+(state == "active" ? "aktif" : "nonaktif")+".png"} alt=""  className="h-8 ml-2 my-auto"/>
            <p className={"py-3 pl-4 "+ (state == "active" ? "text-black" : "text-white") + " text-xs font-semibold"}>{text}</p>
        </div>
    );
}
}