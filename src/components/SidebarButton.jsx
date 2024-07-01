export default function SidebarButton({text, identifier, state}) {
    return(
        <div className={"w-4/5 mx-auto my-3 "+ (state == "active" ? "bg-kuning-terang" : "bg-hijau-terang") +" rounded-full flex"}>
            <img src={"/logo-sidebar/"+identifier+"-"+(state == "active" ? "aktif" : "nonaktif")+".png"} alt=""  className="h-8 ml-2 my-auto"/>
            <p className={"py-3 pl-4 "+ (state == "active" ? "text-black" : "text-white") + " text-xs font-semibold"}>{text}</p>
        </div>
    );
}