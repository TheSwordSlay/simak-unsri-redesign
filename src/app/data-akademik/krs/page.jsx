import Sidebar from "@/components/Sidebar";
import Link from "next/link";

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
                            <p className="font-semibold text-base-hijau-clr text-sm my-auto italic">Kartu Rencana Studi</p>

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
                                    </div>
                                </div>
                                <div className="ml-5 w-1/3 flex flex-col">
                                    <div className="w-full h-[48%] bg-white rounded-lg border flex">
                                        <img src="/logo-akademik/cetak-kartu.png" alt="" className="h-14 mx-3 my-auto"/>
                                        <div className="ml-3 my-auto">
                                            <p className="text-black text-sm font-semibold">Cetak Kartu Rencana Studi</p>
                                            <p className="text-gray-400 text-sm">Download file word</p>   
                                        </div>
                                    </div>
                                    <div className="w-full h-[48%] bg-white rounded-lg border flex mt-auto">
                                        <img src="/logo-akademik/batas-kalender.png" alt="" className="h-14 mx-3 my-auto"/>
                                        <div className="ml-3 my-auto">
                                            <p className="text-black text-sm font-semibold">Batas Isi KRS</p>
                                            <p className="text-gray-400 text-sm">7 Januari 2024</p>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mx-5 my-5"> 
                            <div className="flex mb-3">
                                <p className="text-black font-bold my-auto">Mata Kuliah</p>
                                <button className="btn bg-[#FDCECA] text-[#EB6E64] hover:text-white hover:bg-[#EB6E64] ml-auto mr-2">Batalkan Mata Kuliah</button>
                                <button className="btn btn-accent bg-hijau-paling-terang border-hijau-paling-terang text-hijau-500 hover:text-white">Tambah Mata Kuliah</button>
                            </div>
                            <div className="bg-white rounded-lg border flex w-full">
                                <div className="w-full">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <th className="text-hijau-300">
                                                No.
                                            </th>
                                            <th className="text-hijau-300">Kode</th>
                                            <th className="text-hijau-300">Mata Kuliah</th>
                                            <th className="text-hijau-300">SKS</th>
                                            <th className="text-hijau-300">Kelas</th>
                                            <th className="text-hijau-300">Dosen</th>
                                            <th className="text-hijau-300">Jadwal</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>01.</td>
                                            <td>FIK029382</td>
                                            <td>Skripsi</td>
                                            <td>2 sks</td>
                                            <td>L321</td>
                                            <td>Admin reg</td>
                                            <td><button className='border-2 border-black px-3 py-auto text-sm rounded-full hover:text-white hover:bg-black text-black h-10'>Rabu, 08:00 - 10:00</button></td>    
                                        </tr>

                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>02.</td>
                                            <td>FIK029382</td>
                                            <td>Skripsi</td>
                                            <td>2 sks</td>
                                            <td>L321</td>
                                            <td>Admin reg</td>
                                            <td><button className='border-2 border-black px-3 py-auto text-sm rounded-full hover:text-white hover:bg-black text-black h-10'>Rabu, 08:00 - 10:00</button></td>    
                                        </tr>

                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>03.</td>
                                            <td>FIK029382</td>
                                            <td>Skripsi</td>
                                            <td>2 sks</td>
                                            <td>L321</td>
                                            <td>Admin reg</td>
                                            <td><button className='border-2 border-black px-3 py-auto text-sm rounded-full hover:text-white hover:bg-black text-black h-10'>Rabu, 08:00 - 10:00</button></td>    
                                        </tr>

                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>04.</td>
                                            <td>FIK029382</td>
                                            <td>Skripsi</td>
                                            <td>2 sks</td>
                                            <td>L321</td>
                                            <td>Admin reg</td>
                                            <td><button className='border-2 border-black px-3 py-auto text-sm rounded-full hover:text-white hover:bg-black text-black h-10'>Rabu, 08:00 - 10:00</button></td>    
                                        </tr>

                                        </tbody>
                                        {/* foot */}
                                        <tfoot>
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <th className="text-hijau-300">
                                                No.
                                            </th>
                                            <th className="text-hijau-300">Kode</th>
                                            <th className="text-hijau-300">Mata Kuliah</th>
                                            <th className="text-hijau-300">SKS</th>
                                            <th className="text-hijau-300">Kelas</th>
                                            <th className="text-hijau-300">Dosen</th>
                                            <th className="text-hijau-300">Jadwal</th>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                        <div className="h-3"></div>
                        
                    </div>
                </div>
            </main>

    );
}