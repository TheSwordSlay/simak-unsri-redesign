import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { ButtonPagination } from "@/components/ButtonPagination";

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
                            <p className="font-semibold text-base-hijau-clr text-sm my-auto italic">Transkrip Nilai</p>

                            <Link href="/" className="w-30 ml-auto bg-hijau-paling-terang rounded-full flex"> 
                                <img src="/panduan-logo.png" alt=""  className="h-5 ml-2 my-2"/>
                                <p className="my-auto ml-2 mr-4 text-base-hijau-clr text-xs font-bold">Panduan</p>
                            </Link>
                        </div>
                        <hr className="h-[1px] bg-slate-200" />

                        <div className="mt-10 mb-5 bg-white mx-5 rounded-lg border flex">
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

                                <div >
                                    <p className="text-black font-bold text-sm">Tanggal Kelulusan (Yudisium)</p>
                                    <p className="text-hijau-300 text-sm">33 Januari 2010</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white mx-5 rounded-lg border px-5 py-5">
                            <p className="text-black font-bold mb-3">Summary</p>
                            <div className="bg-[#FFF5D9] px-2 py-2 w-full rounded-md text-sm">
                                <p className="font-semibold">Judul Skripsi</p>
                                <p>Rancang Ulang Antarmuka Human Capital Management System dengan Metode Design Thinking (Studi kasus: PT. Mitra Solusi Telematika)</p>
                            </div>
                            <div className="flex justify-between mt-2 text-sm">
                                <div>
                                    <p className="text-black font-semibold">Jumlah Mutu</p>
                                    <p className="text-hijau-300">538</p>
                                </div>

                                <div>
                                    <p className="text-black font-semibold">Jumlah Kredit Kumulatif</p>
                                    <p className="text-hijau-300">144</p>
                                </div>

                                <div>
                                    <p className="text-black font-semibold">Indeks Prestasi Kumulatif</p>
                                    <p className="text-hijau-300">3.74</p>
                                </div>
                            </div>
                        </div>

                        <div className="mx-5 my-5"> 
                            <div className="flex mb-3">
                                <p className="text-black font-bold my-auto">Mata Kuliah</p>
                                <button className="btn btn-accent bg-hijau-300 border-hijau-paling-terang text-white hover:text-white ml-auto mr-2">Download PDF</button>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" className="grow" placeholder="Cari Mata Kuliah" />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                    </svg>
                                </label>
                            </div>
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
                                            <th className="text-hijau-300">Pengambilan</th>
                                            <th className="text-hijau-300">HM</th>
                                            <th className="text-hijau-300">AM</th>
                                            <th className="text-hijau-300">K</th>
                                            <th className="text-hijau-300">M</th>
                                            <th className="text-hijau-300">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>01.</td>
                                            <td>FIK029382</td>
                                            <td>Skripsi</td>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>A</td>
                                            <td>8</td>
                                            <td>8</td>
                                            <td><button className='border-2 border-black px-3 py-auto text-sm rounded-full hover:text-white hover:bg-black text-black h-10'>Lihat Detail</button></td>    
                                        </tr>

                                        <tr>
                                            <td>02.</td>
                                            <td>FIK029382</td>
                                            <td>Skripsi</td>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>A</td>
                                            <td>8</td>
                                            <td>8</td>
                                            <td><button className='border-2 border-black px-3 py-auto text-sm rounded-full hover:text-white hover:bg-black text-black h-10'>Lihat Detail</button></td>    
                                        </tr>

                                        <tr>
                                            <td>03.</td>
                                            <td>FIK029382</td>
                                            <td>Skripsi</td>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>A</td>
                                            <td>8</td>
                                            <td>8</td>
                                            <td><button className='border-2 border-black px-3 py-auto text-sm rounded-full hover:text-white hover:bg-black text-black h-10'>Lihat Detail</button></td>    
                                        </tr>

                                        <tr>
                                            <td>04.</td>
                                            <td>FIK029382</td>
                                            <td>Skripsi</td>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>A</td>
                                            <td>8</td>
                                            <td>8</td>
                                            <td><button className='border-2 border-black px-3 py-auto text-sm rounded-full hover:text-white hover:bg-black text-black h-10'>Lihat Detail</button></td>    
                                        </tr>

                                        <tr>
                                            <td>05.</td>
                                            <td>FIK029382</td>
                                            <td>Skripsi</td>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>A</td>
                                            <td>8</td>
                                            <td>8</td>
                                            <td><button className='border-2 border-black px-3 py-auto text-sm rounded-full hover:text-white hover:bg-black text-black h-10'>Lihat Detail</button></td>    
                                        </tr>

                                        <tr>
                                            <td>06.</td>
                                            <td>FIK029382</td>
                                            <td>Skripsi</td>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>A</td>
                                            <td>8</td>
                                            <td>8</td>
                                            <td><button className='border-2 border-black px-3 py-auto text-sm rounded-full hover:text-white hover:bg-black text-black h-10'>Lihat Detail</button></td>    
                                        </tr>

                                        <tr>
                                            <td>07.</td>
                                            <td>FIK029382</td>
                                            <td>Skripsi</td>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>A</td>
                                            <td>8</td>
                                            <td>8</td>
                                            <td><button className='border-2 border-black px-3 py-auto text-sm rounded-full hover:text-white hover:bg-black text-black h-10'>Lihat Detail</button></td>    
                                        </tr>

                                        <tr>
                                            <td>08.</td>
                                            <td>FIK029382</td>
                                            <td>Skripsi</td>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>A</td>
                                            <td>8</td>
                                            <td>8</td>
                                            <td><button className='border-2 border-black px-3 py-auto text-sm rounded-full hover:text-white hover:bg-black text-black h-10'>Lihat Detail</button></td>    
                                        </tr>

                                        <tr>
                                            <td>09.</td>
                                            <td>FIK029382</td>
                                            <td>Skripsi</td>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>A</td>
                                            <td>8</td>
                                            <td>8</td>
                                            <td><button className='border-2 border-black px-3 py-auto text-sm rounded-full hover:text-white hover:bg-black text-black h-10'>Lihat Detail</button></td>    
                                        </tr>

                                        <tr>
                                            <td>10.</td>
                                            <td>FIK029382</td>
                                            <td>Skripsi</td>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>A</td>
                                            <td>8</td>
                                            <td>8</td>
                                            <td><button className='border-2 border-black px-3 py-auto text-sm rounded-full hover:text-white hover:bg-black text-black h-10'>Lihat Detail</button></td>    
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
                                            <th className="text-hijau-300">Pengambilan</th>
                                            <th className="text-hijau-300">HM</th>
                                            <th className="text-hijau-300">AM</th>
                                            <th className="text-hijau-300">K</th>
                                            <th className="text-hijau-300">M</th>
                                            <th className="text-hijau-300">Action</th>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>

                            <div className="w-full flex justify-end mt-5">
                                <ButtonPagination number={"« Previous"} active={false}></ButtonPagination>
                                <ButtonPagination number={1} active={true}></ButtonPagination>
                                <ButtonPagination number={2} active={false}></ButtonPagination>
                                <ButtonPagination number={3} active={false}></ButtonPagination>
                                <ButtonPagination number={4} active={false}></ButtonPagination>
                                <ButtonPagination number={"Next »"} active={false}></ButtonPagination>
                            </div>

                            <div className="h-5"></div>
                        </div>

                    </div>
                </div>
            </main>

    );
}