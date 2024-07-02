import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <body className="bg-base-putih-clr">
    <main>
      <div className="flex max-h-screen">
        <div className="w-1/2 justify-self-center">
          <img src="/front-page.png" alt="" className="h-full"/>
        </div>
        <div className="w-1/2 text-center">
          <div className="px-auto py-16">
            <span className="text-5xl text-base-kuning-clr font-semibold">SIMAK </span><span className="text-5xl text-base-hijau-clr font-semibold">UNSRI</span>
            <p className="text-xl text-base-kuning-clr mt-2 font-semibold">SISTEM INFORMASI AKADEMIK MAHASISWA</p>
            <p className="text-lg text-base-hijau-clr mb-7 font-semibold">UNIVERSITAS SRIWIJAYA</p>

            <label className="form-control w-full max-w-xs mx-auto mb-5">
              <div className="label">
                <span className="label-text font-bold">NIM</span>
              </div>
              <input type="text" placeholder="EX: 09..." className="input input-bordered w-full max-w-xs" />
            </label>

            <label className="form-control w-full max-w-xs mx-auto">
              <div className="label">
                <span className="label-text font-bold">Kata Sandi</span>
              </div>
              <input type="password" placeholder="EX: ..." className="input input-bordered w-full max-w-xs" />
              <div className="label">
                <span className="label-text-alt"></span>
                <Link href="/lupa-password" className="label-text-alt font-semibold text-base-hijau-clr underline underline-offset-4">Lupa kata sandi?</Link>
              </div>

              <Link href="/dashboard" className="btn btn-warning mt-5">
                Log In
              </Link>
            </label>

          </div>
        </div>
      </div>
    </main>
    </body>
  );
}
