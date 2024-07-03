import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function usept() {
    return(

            <main>
                <div className="flex h-screen">
                    <Sidebar currentPage="suliet" nama="Rizalul Fiqri" nim="09021282126114"></Sidebar>
                    <div className="w-1/4"></div>
                    <div className="w-3/4">
                        <div className="flex my-3 mx-5 "> 
                            <p className="font-bold text-base-hijau-clr text-xl my-auto">SIMAK</p>
                            <p className="mx-5 text-xl my-auto">&gt;</p>
                            <p className="font-semibold text-base-hijau-clr text-sm my-auto italic">SULIET/USEPT</p>

                            <Link href="/" className="w-30 ml-auto bg-hijau-paling-terang rounded-full flex"> 
                                <img src="/panduan-logo.png" alt=""  className="h-5 ml-2 my-2"/>
                                <p className="my-auto ml-2 mr-4 text-base-hijau-clr text-xs font-bold">Panduan</p>
                            </Link>
                        </div>
                        <hr className="h-[1px] bg-slate-200" />
                        <div className="my-10 bg-white w-11/12 mx-auto rounded-lg border flex">
                            <img src="/default_prof_pic.png" alt="" className="h-16 my-5 ml-5 mr-20"/>
                            <div class="grid grid-cols-4 gap-5 justify-between my-5 w-full">
                                <div>
                                    <p className="text-black font-bold text-sm">NIM</p>
                                    <p className="text-hijau-300 text-sm">09021282126114</p>
                                </div>
                               
                                <div className="col-span-2">
                                    <p className="text-black font-bold text-sm">Tempat, Tanggal Lahir</p>
                                    <p className="text-hijau-300 text-sm">Planet Namek, 32 Februari 1987</p>
                                </div>

                                <div>
                                    <p className="text-black font-bold text-sm">Tahun Masuk</p>
                                    <p className="text-hijau-300 text-sm">2050</p>
                                </div>

                                <div>
                                    <p className="text-black font-bold text-sm">Nama</p>
                                    <p className="text-hijau-300 text-sm">Rizalul Fiqri</p>
                                </div>

                                <div className="col-span-2">
                                    <p className="text-black font-bold text-sm">Program Studi</p>
                                    <p className="text-hijau-300 text-sm">Teknik Informatika</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

    );
}