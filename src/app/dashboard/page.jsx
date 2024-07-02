import { MKTile } from '@/components/MKTile';
import { ButtonPagination } from '@/components/ButtonPagination';
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Chart from '@/components/Chart';
import News from "@/components/News";
export default function dashboard() {
    return(
        <body className="bg-base-putih-clr">
            <main className='bg-base-putih-clr'>
                <div className="flex h-screen">
                    <Sidebar currentPage="dashboard" nama="Lorem Ipsum" nim="133713371337"></Sidebar>
                    <div className="w-1/4"></div>
                    <div className="w-3/4">
                        <div className="flex my-3 mx-5 "> 
                            <p className="font-bold text-base-hijau-clr text-xl my-auto">SIMAK</p>
                            <p className="mx-5 text-xl my-auto">&gt;</p>
                            <p className="font-semibold text-base-hijau-clr text-sm my-auto italic">Dashboard</p>

                            <Link href="/" className="w-30 ml-auto bg-hijau-paling-terang rounded-full flex"> 
                                <img src="/panduan-logo.png" alt=""  className="h-5 ml-2 my-2"/>
                                <p className="my-auto ml-2 mr-4 text-base-hijau-clr text-xs font-bold">Panduan</p>
                            </Link>
                        </div>
                        <hr className="h-[1px] bg-slate-200" />
                        
                        <div className="my-5 mx-5 w-11/22 flex justify-stretch">
                            <div className="w-full mr-5 bg-white rounded-lg border flex">
                                <img src="/logo-dashboard/sks.png" alt="" className="h-12 mx-3 my-3"/>
                                <div className=" my-auto">
                                    <p className="text-hijau-300 text-[0.7rem]">Jumlah SKS</p>
                                    <p className="text-black font-bold text-sm">140 SKS</p>   
                                </div>
                            </div>

                            <div className="w-full mr-5 bg-white rounded-lg border flex">
                                <img src="/logo-dashboard/mk.png" alt="" className="h-12 mx-3 my-3"/>
                                <div className=" my-auto">
                                    <p className="text-black font-bold text-sm">2 SKS</p>   
                                    <p className="text-kuning-500 text-[0.7rem]">MK Konversi</p>
                                </div>
                            </div>

                            <div className="w-full mr-5 bg-white rounded-lg border flex">
                                <img src="/logo-dashboard/dosen-pa.png" alt="" className="h-12 mx-3 my-3"/>
                                <div className=" my-auto">
                                    <p className="text-black font-bold text-sm">Osvari</p>   
                                    <p className="text-hijau-300 text-[0.7rem]">Dosen PA</p>
                                </div>
                            </div>

                            <div className="w-full bg-white rounded-lg border flex">
                                <img src="/logo-dashboard/kelas.png" alt="" className="h-12 mx-3 my-3"/>
                                <div className=" my-auto">
                                    <p className="text-kuning-500 text-[0.7rem]">Kelas</p>
                                    <p className="text-black font-bold text-sm">Reguler</p>   
                                </div>
                            </div>

                        </div>

                        <div className="flex mb-5">
                            <div className="mx-5 w-4/6">
                                <p className="text-black font-bold mb-3">IPK dan IPS</p>
                                <div className="bg-white rounded-lg border h-[22rem]">
                                    <p className="text-grey mx-5 mt-5 mb-2 text-gray-400 text-sm">IPK/IPS Semester 7</p>
                                    <span className="text-black font-bold text-2xl ml-5">4,0</span><span className="text-grey  text-gray-400 text-sm"> / 4,0</span>
                                    
                                    <Chart ipk={[4, 2.5, 3, 2, 3.5, 2.7, 4]} ips={[2.5, 3, 2, 4, 2.7, 3.5, 3]}></Chart>
                                </div>
                            </div>

                            <div className="mr-5 w-2/6">
                                <p className="text-black font-bold mb-3">Pengumuman</p>
                                <div className="bg-white rounded-lg border h-[22rem] w-full px-5 py-5">
                                    <News judul="Pendaftaran Wisuda 172" isi="Lengkapi berkas dan Daftar..." gambar="/logo-dashboard/pengumuman_kuning.png"></News>

                                    <News judul="Pendaftaran Wisuda 172" isi="Lengkapi berkas dan Daftar..." gambar="/logo-dashboard/pengumuman_hijau.png"></News>

                                    <News judul="Pendaftaran Wisuda 172" isi="Lengkapi berkas dan Daftar..." gambar="/logo-dashboard/pengumuman_kuning.png"></News>

                                    <News judul="Pendaftaran Wisuda 172" isi="Lengkapi berkas dan Daftar..." gambar="/logo-dashboard/pengumuman_hijau.png"></News>
                                    <div className="w-full flex justify-center">
                                        <ButtonPagination number={"«"} active={false}></ButtonPagination>
                                        <ButtonPagination number={1} active={true}></ButtonPagination>
                                        <ButtonPagination number={2} active={false}></ButtonPagination>
                                        <ButtonPagination number={3} active={false}></ButtonPagination>
                                        <ButtonPagination number={4} active={false}></ButtonPagination>
                                        <ButtonPagination number={"»"} active={false}></ButtonPagination>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mx-5'>
                            <div className='flex mb-5'>
                                <p className="text-black font-bold mb-3 text-lg my-auto">Jadwal Hari Ini</p>
                                <select className="select select-bordered ml-auto bg-hijau-200 text-hijau-500 font-semibold rounded-full">
                                    <option selected className='font-semibold '>Senin</option>
                                    <option className='font-semibold '>Selasa</option>
                                    <option className='font-semibold '>Rabu</option>
                                    <option className='font-semibold '>Kamis</option>
                                    <option className='font-semibold '>Jum'at</option>
                                </select>
                            </div>

                            <MKTile nama={"Kecerdasan Buatan"} dosen={"Agus, M.KOM"} sks={3} jadwal={"Jumat | 10:00 - 13.00"} isonline={true}/>
                            <MKTile nama={"Kecerdasan Buatan"} dosen={"Agus, M.KOM"} sks={3} jadwal={"Jumat | 10:00 - 13.00"} isonline={false}/>
                            <MKTile nama={"Kecerdasan Buatan"} dosen={"Agus, M.KOM"} sks={3} jadwal={"Jumat | 10:00 - 13.00"} isonline={true}/>
                            <MKTile nama={"Kecerdasan Buatan"} dosen={"Agus, M.KOM"} sks={3} jadwal={"Jumat | 10:00 - 13.00"} isonline={false}/>
                            <div className='h-3'></div>
                        </div>

                    </div>
                </div>
            </main>
        </body>
    );
}