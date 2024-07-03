import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function kkn() {
    return(

            <main>
                <div className="flex h-screen">
                    <Sidebar currentPage="kkn" nama="Rizalul Fiqri" nim="09021282126114"></Sidebar>
                    <div className="w-1/4"></div>
                    <div className="w-3/4">
                        <div className="flex my-3 mx-5 "> 
                            <p className="font-bold text-base-hijau-clr text-xl my-auto">SIMAK</p>
                            <p className="mx-5 text-xl my-auto">&gt;</p>
                            <p className="font-semibold text-base-hijau-clr text-sm my-auto italic">Pendaftaran KKN</p>

                            <Link href="/" className="w-30 ml-auto bg-hijau-paling-terang rounded-full flex"> 
                                <img src="/panduan-logo.png" alt=""  className="h-5 ml-2 my-2"/>
                                <p className="my-auto ml-2 mr-4 text-base-hijau-clr text-xs font-bold">Panduan</p>
                            </Link>
                        </div>
                        <hr className="h-[1px] bg-slate-200" />
                    </div>
                </div>
            </main>

    );
}