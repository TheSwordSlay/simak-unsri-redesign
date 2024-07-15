import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Select from "@/components/Select";

export default function Akademik() {
    return(

            <main>
                <div className="flex h-screen">
                    <Sidebar currentPage="data-akademik" nama="Rizalul Fiqri" nim="09021282126114"></Sidebar>
                    <div className="w-1/4"></div>
                    <div className="w-3/4">
                        <div className="flex my-3 mx-5 "> 
                            <p className="font-bold text-base-hijau-clr text-xl my-auto">SIMAK</p>
                            <p className="mx-5 text-xl my-auto">&gt;</p>
                            <p className="font-semibold text-base-hijau-clr text-sm my-auto italic">Data Akademik</p>
                            <p className="mx-5 text-xl my-auto">&gt;</p>
                            <p className="font-semibold text-base-hijau-clr text-sm my-auto italic">Kartu Hasil Studi</p>

                            <Link href="/" className="w-30 ml-auto bg-hijau-paling-terang rounded-full flex"> 
                                <img src="/panduan-logo.png" alt=""  className="h-5 ml-2 my-2"/>
                                <p className="my-auto ml-2 mr-4 text-base-hijau-clr text-xs font-bold">Panduan</p>
                            </Link>
                        </div>
                        <hr className="h-[1px] bg-slate-200" />

                        <div className="mx-5 my-5">

                            <div className="flex">
                                <div className="bg-white w-2/3 rounded-lg border flex h-full">
                                    <img src="/default_prof_pic.png" alt="" className="h-16 my-5 mx-5"/>
                                    <div class="grid grid-cols-2 gap-5 justify-between my-5 w-full">
                                        <div>
                                            <p className="text-black font-bold text-sm">NIM</p>
                                            <p className="text-hijau-300 text-sm">09021282126114</p>
                                        </div>
                                    
                                        <div >
                                            <p className="text-black font-bold text-sm">Nama Dosen PA</p>
                                            <p className="text-hijau-300 text-sm">Andi Sunanda, M.Kom., Ph.D</p>
                                        </div>

                                        <div>
                                            <p className="text-black font-bold text-sm">Tahun Akademik</p>
                                            <p className="text-hijau-300 text-sm">2023/2024 (Semester Genap)</p>
                                        </div>

                                        <div>
                                            <p className="text-black font-bold text-sm">NIP Dosen PA</p>
                                            <p className="text-hijau-300 text-sm">0283923863293648</p>
                                        </div>

                                        <div>
                                            <p className="text-black font-bold text-sm">Program Studi</p>
                                            <p className="text-hijau-300 text-sm">Teknik Informatika</p>
                                        </div>

                                        <div>
                                        <p className="text-black font-bold text-sm mb-1">Periode Semester</p>
                                            <select className="border-slate-800 border-2 rounded-full px-2 cursor-pointer">
                                                <option>Semester 1</option>
                                                <option>Semester 2</option>
                                                <option>Semester 3</option>
                                                <option>Semester 4</option>
                                                <option>Semester 5</option>
                                                <option>Semester 6</option>
                                                <option>Semester 7</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-5 w-1/3 flex flex-col">
                                    <div className="w-full h-[48%] bg-white rounded-lg border flex">
                                        <img src="/logo-akademik/cetak-kartu.png" alt="" className="h-14 mx-3 my-auto"/>
                                        <div className="ml-3 my-auto">
                                            <p className="text-black text-sm font-semibold">Cetak Kartu Hasil Studi</p>
                                            <p className="text-gray-400 text-sm">Download file word</p>   
                                        </div>
                                    </div>
                                    <div className="w-full h-[48%] bg-white rounded-lg border flex mt-auto">
                                        <img src="/logo-akademik/sks-kalender.png" alt="" className="h-14 mx-3 my-auto"/>
                                        <div className="ml-3 my-auto">
                                            <p className="text-black text-sm font-semibold">SKS Semester Berikutnya</p>
                                            <button className='bg-[#FFF5D9] px-3 py-auto text-sm rounded-full text-[#F6AA0B]'>Maksimal 24 SKS</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="my-5"> 
                                <p className="text-black font-bold mb-3">Mata Kuliah</p>
                                <div className="bg-white rounded-lg border flex w-full">
                                    <div className="w-full">
                                        <table className="table">
                                            {/* head */}
                                            <thead>
                                            <tr>
                                                <th className="text-hijau-300">
                                                    No.
                                                </th>
                                                <th className="text-hijau-300">Kode</th>
                                                <th className="text-hijau-300">Mata Kuliah</th>
                                                <th className="text-hijau-300">SKS</th>
                                                <th className="text-hijau-300">Dosen</th>
                                                <th className="text-hijau-300">Nilai Angka</th>
                                                <th className="text-hijau-300">Nilai Huruf</th>
                                                <th className="text-hijau-300">Bobot</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            <tr>
                                                <td>
                                                    01.
                                                </td>
                                                <td>FIK029382</td>
                                                <td>Skripsi</td>
                                                <td>2 sks</td>
                                                <td>Admin reg</td>
                                                <td>4</td>
                                                <td>A</td>
                                                <td>8</td>    
                                            </tr>

                                            <tr>
                                                <td>02.</td>
                                                <td>FIK029382</td>
                                                <td>Skripsi</td>
                                                <td>2 sks</td>
                                                <td>Admin reg</td>
                                                <td>4</td>
                                                <td>A</td>
                                                <td>8</td>    
                                            </tr>

                                            <tr>
                                                <td>03.</td>
                                                <td>FIK029382</td>
                                                <td>Skripsi</td>
                                                <td>2 sks</td>
                                                <td>Admin reg</td>
                                                <td>4</td>
                                                <td>A</td>
                                                <td>8</td>    
                                            </tr>

                                            <tr>
                                                <td>04.</td>
                                                <td>FIK029382</td>
                                                <td>Skripsi</td>
                                                <td>2 sks</td>
                                                <td>Admin reg</td>
                                                <td>4</td>
                                                <td>A</td>
                                                <td>8</td>    
                                            </tr>

                                            <tr>
                                                <td>05.</td>
                                                <td>FIK029382</td>
                                                <td>Skripsi</td>
                                                <td>2 sks</td>
                                                <td>Admin reg</td>
                                                <td>4</td>
                                                <td>A</td>
                                                <td>8</td>    
                                            </tr>

                                            </tbody>
                                            {/* foot */}
                                            <tfoot>
                                            <tr>
                                                <th className="text-hijau-300">
                                                    No.
                                                </th>
                                                <th className="text-hijau-300">Kode</th>
                                                <th className="text-hijau-300">Mata Kuliah</th>
                                                <th className="text-hijau-300">SKS</th>
                                                <th className="text-hijau-300">Dosen</th>
                                                <th className="text-hijau-300">Nilai Angka</th>
                                                <th className="text-hijau-300">Nilai Huruf</th>
                                                <th className="text-hijau-300">Bobot</th>
                                            </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between">

                                <div className="flex bg-hijau-paling-terang border-hijau-300 text-hijau-300 font-semibold px-3 py-2 rounded-md text-xs">
                                    <p className="my-auto mr-2">Kredit Yang Ditempuh</p>
                                    <div className="bg-hijau-300 text-white rounded-md px-2 py-1 ml-auto">
                                        <p>12 SKS</p>
                                    </div>
                                </div>

                                <div className="flex bg-hijau-paling-terang border-hijau-300 text-hijau-300 font-semibold px-3 py-2 rounded-md text-xs">
                                    <p className="my-auto mr-2">Kredit Yang Telah Ditempuh</p>
                                    <div className="bg-hijau-300 text-white rounded-md px-2 py-1 ml-auto">
                                        <p>144 SKS</p>
                                    </div>
                                </div>

                                <div className="flex bg-hijau-paling-terang border-hijau-300 text-hijau-300 font-semibold px-3 py-2 rounded-md text-xs">
                                    <p className="my-auto mr-2">Indeks Prestasi Semester</p>
                                    <div className="bg-hijau-300 text-white rounded-md px-2 py-1 ml-auto">
                                        <p>4.00</p>
                                    </div>
                                </div>

                                <div className="flex bg-hijau-paling-terang border-hijau-300 text-hijau-300 font-semibold px-3 py-2 rounded-md text-xs">
                                    <p className="my-auto mr-2">Indeks Prestasi Kumulatif</p>
                                    <div className="bg-hijau-300 text-white rounded-md px-2 py-1 ml-auto">
                                        <p>4.00</p>
                                    </div>
                                </div>

                            </div>
                            
                        </div>

                        <div className="h-3"></div>
                    </div>
                </div>
            </main>

    );
}