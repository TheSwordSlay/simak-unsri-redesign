import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function Kkn() {
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
                        <div className="bg-[#FFF5D9] border-[1px] border-[#C5C3B8] mx-5 my-5 px-5 py-5 rounded-md text-sm">
                            <p>Pengumuman</p>
                            <p className="mt-5 mb-1 font-bold text-base">Pendaftaran Calon Peserta Kegiatan Kuliah Kerja Nyata (KKN)</p>
                            <span>Pendaftaran akan dibuka</span><span className=' ml-2 font-semibold bg-[#FAE4B6] px-3 text-sm rounded-full text-[#F6AA0B]'>8 Agustus 2024</span>
                        </div>
                    </div>
                </div>
            </main>

    );
}