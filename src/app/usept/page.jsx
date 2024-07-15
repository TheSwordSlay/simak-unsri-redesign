import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function Usept() {
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
                        <div className="my-10 bg-white mx-5 rounded-lg border flex">
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
                        
                        <div className="mx-5 mb-5"> 
                            <p className="text-black font-bold mb-3">Daftar Hasil SULIET/USEPT</p>
                            <div className="bg-white rounded-lg border flex w-full">
                                <div className="w-full">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                        <tr>
                                            <th>
                                                No.
                                            </th>
                                            <th>Tanggal</th>
                                            <th>Listening</th>
                                            <th>Structure</th>
                                            <th>Reading</th>
                                            <th>Total Score</th>
                                            <th>Syarat Lulus</th>
                                            <th>Keterangan</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>01.</td>
                                            <td>16 Mar 2024</td>
                                            <td>40</td>
                                            <td>40</td>
                                            <td>30</td>
                                            <td>450</td>
                                            <td>500</td>
                                            <td><button className="btn btn-outline btn-error rounded-full ">Belum lulus</button></td>

                                        </tr>

                                        <tr>
                                            <td>02.</td>
                                            <td>16 Mar 2024</td>
                                            <td>40</td>
                                            <td>40</td>
                                            <td>30</td>
                                            <td>430</td>
                                            <td>500</td>
                                            <td><button className="btn btn-outline btn-error rounded-full ">Belum lulus</button></td>

                                        </tr>

                                        <tr>
                                            <td>03.</td>
                                            <td>16 Mar 2024</td>
                                            <td>40</td>
                                            <td>40</td>
                                            <td>30</td>
                                            <td>499</td>
                                            <td>500</td>
                                            <td><button className="btn btn-outline btn-error rounded-full ">Belum lulus</button></td>

                                        </tr>
                                        </tbody>
                                        {/* foot */}
                                        <tfoot>
                                        <tr>
                                            <th>
                                                No.
                                            </th>
                                            <th>Tanggal</th>
                                            <th>Listening</th>
                                            <th>Structure</th>
                                            <th>Reading</th>
                                            <th>Total Score</th>
                                            <th>Syarat Lulus</th>
                                            <th>Keterangan</th>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white mx-5 rounded-lg border px-5 py-5">
                            <p className="text-black font-bold">Course</p>
                            <p className="mb-3">English Conversation, Free Speaking and Academic Writing Course</p>
                            <div className="flex justify-between bg-[#CFECE0] px-5 pr-14 py-2 w-full rounded-md text-sm">
                                <div>
                                    <p className="text-black font-semibold">ID Number</p>
                                    <p className="text-hijau-300">09021182025008</p>
                                </div>

                                <div>
                                    <p className="text-black font-semibold">Name</p>
                                    <p className="text-hijau-300">Rizalul Fiqri</p>
                                </div>

                                <div>
                                    <p className="text-black font-semibold">Score</p>
                                    <p className="text-hijau-300">87.5</p>
                                </div>
                                
                                <div>
                                    <p className="text-black font-semibold">Grade</p>
                                    <p className="text-hijau-300">A</p>
                                </div>

                            </div>
                        </div>

                        <div className="h-5"></div>
                    </div>
                </div>
            </main>

    );
}