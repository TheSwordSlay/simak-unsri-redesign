export default function News({judul, isi, gambar}){
    return(
        <div className="mb-5 flex">
            <img src={gambar} alt="" className="h-12" />
            <div className="my-auto ml-5">
                <p className="font-semibold text-sm">{judul}</p>
                <p className="text-gray-400 text-sm">{isi}</p>
            </div>
        </div>
    );
} 