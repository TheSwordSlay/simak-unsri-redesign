'use client'
import { InputEnabled } from "@/components/InputEnabled";
import { InputDisabled } from "@/components/InputDisabled";
import { InputEnabledDate } from "@/components/InputEnabledDate";
import Select from "@/components/Select";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { useRef } from "react";

export default function Pribadi() {
    const inputFile = useRef(null) 
    return(

            <main>
                <div className="flex h-screen">
                    <Sidebar currentPage="data-pribadi" nama="Rizalul Fiqri" nim="09021282126114"></Sidebar>
                    <div className="w-1/4"></div>
                    <div className="w-3/4">
                        <div className="flex my-3 mx-5 "> 
                            <p className="font-bold text-base-hijau-clr text-xl my-auto">SIMAK</p>
                            <p className="mx-5 text-xl my-auto">&gt;</p>
                            <p className="font-semibold text-base-hijau-clr text-sm my-auto italic">Data Pribadi</p>

                            <Link href="/" className="w-30 ml-auto bg-hijau-paling-terang rounded-full flex"> 
                                <img src="/panduan-logo.png" alt=""  className="h-5 ml-2 my-2"/>
                                <p className="my-auto ml-2 mr-4 text-base-hijau-clr text-xs font-bold">Panduan</p>
                            </Link>
                        </div>
                        <hr className="h-[1px] bg-slate-200" />

                        <div className="mx-5 my-5">
                            <div className="w-full bg-white rounded-lg border min-h-screen">

                                <div className="avatar flex justify-center mt-6">
                                    <div className="w-20 rounded-full">
                                        <img src="/default_prof_pic.png" />
                                    </div>
                                </div>
                                <img src="/logo-datprib/edit-photo.png" alt="" className="h-6 mx-auto cursor-pointer" onClick={() => inputFile.current.click()} />
                                <input ref={inputFile} type="file" className="hidden"/>
                                <p className="text-gray-400 text-xs text-center mt-1">Upload Max 2MB</p> 

                                <div className="w-full flex justify-center mt-10">
                                    <div>
                                        <p className="border-2 border-base-hijau-clr w-8 h-8 rounded-full bg-hijau-200 text-hijau-500 text-center mx-auto">
                                            1
                                        </p>
                                        <p className="text-hijau-500 text-center mt-2 font-semibold">Data Akademik</p>
                                    </div>
                                    <hr className="h-1 bg-hijau-200 w-40 rounded-full my-auto mx-1" />
                                    <div>
                                        <p className="border-2 border-base-hijau-clr w-8 h-8 rounded-full bg-hijau-200 text-hijau-500 text-center mx-auto">
                                            2
                                        </p>
                                        <p className="text-hijau-500 text-center mt-2 font-semibold">Data Keluarga</p>
                                    </div>
                                    <hr className="h-1 bg-hijau-200 w-40 rounded-full my-auto mx-1" />
                                    <div>
                                        <p className="border-2 border-base-hijau-clr w-8 h-8 rounded-full bg-hijau-200 text-hijau-500 text-center mx-auto">
                                            3
                                        </p>
                                        <p className="text-hijau-500 text-center mt-2 font-semibold">Data Lainnya</p>
                                    </div>
                                </div>

                                <hr className="outline-dashed mx-auto w-full my-5 outline-gray-400 opacity-25"></hr>

                                <div class=" mx-10 grid grid-cols-2 gap-4 mb-7">
                                    <InputDisabled label={"Angkatan"} value={"2020"}></InputDisabled>
                                    <InputDisabled label={"Dosen PA"} value={"Osvari"}></InputDisabled>
                                    <InputDisabled label={"NIM"} value={"09021282126114"}></InputDisabled>
                                    <InputEnabled label={"Nama Mahasiswa"} placeholder={"Masukkan nama disini"}></InputEnabled>
                                    <InputEnabled label={"Alamat Mahasiswa"} placeholder={"Masukkan alamat disini"}></InputEnabled>
                                    <InputEnabled label={"Nomor Telepon Rumah"} placeholder={"Masukkan no. telepon disini"}></InputEnabled>
                                    <InputEnabled label={"Tempat lahir"} placeholder={"Masukkan tempat lahir"}></InputEnabled>
                                    <InputEnabledDate label={"Tanggal lahir"} placeholder={"Masukkan tanggal lahir"}></InputEnabledDate>
                                    <Select label={"Jenis kelamin"} options={["Laki-laki", "Perempuan"]}></Select>
                                    <Select label={"Agama"} options={["Islam", "Kristen Protestan", "Kristen Katolik", "Hindu", "Buddha", "Konghucu"]}></Select>
                                    <Select label={"Kewarganegaraan"} options={["Warga Negara Indonesia", "Non - WNI"]}></Select>
                                    <Select label={"Status perkawinan"} options={["Sudah menikah", "Belum menikah"]}></Select>
                                </div>
                                <div className="mx-10 flex">
                                    <button className="btn btn-outline btn-error">Reset</button>
                                    <button className="btn btn-warning ml-auto">Selanjutnya</button>
                                    <button className="btn btn-success ml-3 mb-10">Simpan</button>
                                </div>
                            </div>
                        </div>
                        <div className="h-5"></div>

                    </div>
                </div>
            </main>
    );
}