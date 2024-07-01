export default function lupaPassword() {
    return(
        <body className="bg-base-putih-clr">
            <main className="flex flex-col h-screen">
                <img src="/lupa-pw-header.png" alt="" className="w-viewscreen"/>
                <div className="mx-auto text-center mb-20 mt-5">
                    <span className="text-4xl text-base-kuning-clr font-semibold">Lupa </span><span className="text-4xl text-base-hijau-clr font-semibold">Sandi?</span>
                    <p className="text-xl text-base-kuning-clr my-1 font-semibold">KAMI BISA PERBARUI SANDI</p>
                    <p className="text-lg text-base-hijau-clr my-1 font-semibold">MASUKKAN EMAIL MAHASISWAMU DIBAWAH INI</p>
                    <label className="form-control w-full max-w-xs mx-auto mt-3">
                    <div className="label">
                        <span className="label-text font-bold">Email UNSRI</span>
                    </div>
                    <input type="text" placeholder="EX: ...@unsri.ac.id" className="input input-bordered w-full max-w-xs" />

                    <button className="btn btn-warning mt-10">Kirim Kode Verification</button>
                    </label>
                </div>
                <img src="/lupa-pw-footer.png" alt="" className="w-viewscreen mt-auto"/>
            </main>
        </body>
    );
}