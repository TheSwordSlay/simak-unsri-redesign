import React from "react";
export function MKTile({nama, dosen, sks, jadwal, isonline}) {
  return <div className='w-full bg-white rounded-lg border flex justify-between px-3 py-3 mb-3'>
                                <div className="flex">
                                    <img src="/logo-dashboard/logo-mk.png" alt="" className='h-14 mr-5' />
                                    <div className='my-auto'>
                                        <p className="font-semibold text-sm">Nama MK</p>
                                        <p className="text-hijau-500 text-sm">{nama}</p>
                                    </div>
                                </div>
                                <div className='my-auto'>
                                    <p className="font-semibold text-sm">Dosen</p>
                                    <p className="text-hijau-500 text-sm">{dosen}</p>
                                </div>
                                <div className='my-auto'>
                                    <p className="font-semibold text-sm">SKS</p>
                                    <p className="text-hijau-500 text-sm">{sks} SKS</p>
                                </div>
                                <div className='my-auto'>
                                    <p className="font-semibold text-sm">Jadwal</p>
                                    <p className="text-hijau-500 text-sm">{jadwal}</p>
                                </div>
                                {isonline ? 
                                    
                                        <div className="my-auto">
                                            <button className='border-2 border-hijau-500 px-3 py-auto text-sm rounded-full hover:text-white hover:bg-hijau-500 text-hijau-500 h-10'>Absen Online</button>
                                        </div>
                                    
                                :
                                    
                                        <div className="my-auto">
                                        <button className='border-2 border-hijau-500 px-3 py-auto text-sm rounded-full hover:text-white hover:bg-hijau-500 text-hijau-500 h-10'>Absen Offline</button>
                                        </div>
                                    
                                }

                            </div>;
}
  