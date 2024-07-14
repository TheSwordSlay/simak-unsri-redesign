import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { InputEnabled } from "@/components/InputEnabled";

export default function SettingPassword() {
    return(

            <main>
                <div className="flex h-screen">
                    <Sidebar currentPage="password" nama="Rizalul Fiqri" nim="09021282126114"></Sidebar>
                    <div className="w-1/4"></div>
                    <div className="w-3/4">
                        <div className="flex my-3 mx-5 "> 
                            <p className="font-bold text-base-hijau-clr text-xl my-auto">SIMAK</p>
                            <p className="mx-5 text-xl my-auto">&gt;</p>
                            <p className="font-semibold text-base-hijau-clr text-sm my-auto italic">Setting password</p>

                            <Link href="/" className="w-30 ml-auto bg-hijau-paling-terang rounded-full flex"> 
                                <img src="/panduan-logo.png" alt=""  className="h-5 ml-2 my-2"/>
                                <p className="my-auto ml-2 mr-4 text-base-hijau-clr text-xs font-bold">Panduan</p>
                            </Link>
                        </div>
                        <hr className="h-[1px] bg-slate-200" />

                        <div className="mx-5 my-5">
                            <div className="w-full bg-white rounded-lg border">
                                <div className="flex w-full">
                                    <div className="w-1/2 mx-5 my-5">
                                        <p className="text-black font-bold mb-3">Ganti Kata Sandi</p>
                                        <p className="text-sm">Kamu bisa ganti kata sandi kamu dengan memasukkan kata sandi yang lama!</p>
                                        <label className="form-control w-full max-w-xs mt-3">
                                            <div className="label">
                                                <span className="label-text font-bold">Kata Sandi Lama</span>
                                            </div>
                                            <input type="text" placeholder="Masukkan kata sandi lama mu" className="input input-bordered w-full max-w-xs" />
                                            <div className="label">
                                                <span className="label-text-alt"></span>
                                                <Link href="/lupa-password" className="label-text-alt font-semibold text-error underline underline-offset-4">Lupa kata sandi?</Link>
                                            </div>
                                        </label>

                                        <label className="form-control w-full max-w-xs">
                                            <div className="label">
                                                <span className="label-text font-bold">Sandi Baru</span>
                                            </div>
                                            <input type="text" placeholder="Masukkan kata sandi lama mu" className="input input-bordered w-full max-w-xs" />
                                        </label>

                                        <label className="form-control w-full max-w-xs mt-3">
                                            <div className="label">
                                                <span className="label-text font-bold">Konfirmasi Sandi Baru</span>
                                            </div>
                                            <input type="text" placeholder="Masukkan kata sandi lama mu" className="input input-bordered w-full max-w-xs" />
                                        </label>
                                        <button className="btn btn-success w-5/6 mt-5">Simpan</button>
                                    </div>
                                    <div className="w-1/2 mx-5 my-5">
                                        <p className="text-black font-bold mb-3">Panduan Kata Sandi</p>
                                        <p className="text-sm">Perhatikan untuk pembuatan kata sandi yang baru, agar sesuai dengan panduan seperti dibawah ini</p>
                                        <ol class="list-decimal mt-3 ml-3">
                                        <li className="text-sm">Password dianjurkan minimal 10 digit tanpa spasi (dapat berupa gabungan huruf dan angka).</li>
                                        <li className="text-sm mt-2">Huruf besar atau kecil password agar diperhatikan. .</li>
                                        <li className="text-sm mt-2">Jangan menggunakan karakter spesial berikut ke dalam password Anda: (Misal: {"!\"#$%&'()*+,-./:;<>=?@[\\]^_`|{}~"}) .</li>
                                        <li className="text-sm mt-2">Jaga baik-baik password Anda, jangan sampai hilang atau lupa.</li>
                                        <li className="text-sm mt-2">Jangan sekali-kali memberikan password Anda kepada siapapun demi keamanan, kerahasiaan dan validitas data akademik Anda.</li>
                                        <li className="text-sm mt-2">Jika Anda kehilangan password Anda, segeralah hubungi admin BAAK fakultas yang bersangkutan.</li>

                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

    );
}