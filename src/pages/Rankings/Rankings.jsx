import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useDataFetching from "../../hooks/useDataFetching";
import Loading from "../Loading/Loading";



const Rankings = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [artists, setArtists] = useState([]);
    const [data, loading, error] = useDataFetching('http://localhost:5001/artists')

    if (loading) {
        return <Loading />
    }

    return (
        <div className="lg:w-[1000px]  lg:py-[50px] mx-auto px-5 lg:px-0 ">
            <h3 className="text-[22px] lg:text-[51px] font-bold">Top Creators</h3>
            <p className="text-[16px] lg:text-[22px] pt-1">Check out top ranking NFT artists on the NFT Marketplace.</p>
            {/* tab headers */}
            <div className=' pt-10 lg:pt-20  flex  gap-8 lg:gap-3 w-11/12 lg:w-full  mx-auto'>

                {/* Today */}
                <div className='cursor-pointer' onClick={() => setActiveTab(1)}>

                    <div className='flex  items-center justify-center lg:w-[262px] h-[60px]'>
                        <h3 className={`hidden lg:block text-[16px] lg:text-[22px] ${activeTab === 1 ? '' : 'text-[#858584]'}`}>Today</h3>

                        <h3 className={` block lg:hidden text-[16px] lg:text-[22px] ${activeTab === 1 ? '' : 'text-[#858584]'}`}>1d</h3>
                    </div>
                    <div className={`
                    h-[2px] w-full bg-[#858584]
                    ${activeTab === 1 ?
                            'block'
                            :
                            'hidden'
                        }
                    `} ></div>
                </div>

                {/* This Week */}
                <div className='cursor-pointer' onClick={() => setActiveTab(2)}>

                    <div className='flex  items-center justify-center lg:w-[262px] h-[60px]'>
                        <h3 className={`lg:block hidden text-[16px] lg:text-[22px] ${activeTab === 2 ? '' : 'text-[#858584]'}`}>This Week</h3>

                        <h3 className={`block lg:hidden text-[16px] lg:text-[22px] ${activeTab === 2 ? '' : 'text-[#858584]'}`}>7d</h3>

                    </div>
                    <div className={`
                    h-[2px] w-full bg-[#858584]
                    ${activeTab === 2 ?
                            'block'
                            :
                            'hidden'
                        }
                    `} ></div>
                </div>
                {/* This Month */}
                <div className='cursor-pointer' onClick={() => setActiveTab(3)}>

                    <div className='flex  items-center justify-center lg:w-[262px] h-[60px]'>
                        <h3 className={`lg:block hidden text-[16px] lg:text-[22px] ${activeTab === 3 ? '' : 'text-[#858584]'}`}>This Month</h3>

                        <h3 className={`block lg:hidden text-[16px] lg:text-[22px] ${activeTab === 3 ? '' : 'text-[#858584]'}`}>30d</h3>

                    </div>
                    <div className={`
                    h-[2px] w-full bg-[#858584]
                    ${activeTab === 3 ?
                            'block'
                            :
                            'hidden'
                        }
                    `} ></div>
                </div>
                {/* All Time */}
                <div className='cursor-pointer' onClick={() => setActiveTab(4)}>

                    <div className='flex  items-center justify-center lg:w-[262px] h-[60px]'>
                        <h3 className={`text-[16px] lg:text-[22px] ${activeTab === 4 ? '' : 'text-[#858584]'}`}>All Time</h3>

                    </div>
                    <div className={`
                    h-[2px] w-full bg-[#858584]
                    ${activeTab === 4 ?
                            'block'
                            :
                            'hidden'
                        }
                    `} ></div>
                </div>
            </div>
            {/* tab contents */}
            <div className="mt-10">

                {/* today table  */}
                <div className={`overflow-x-auto 
                ${activeTab === 1 ?
                        'block'
                        :
                        'hidden'
                    }
                `}>
                    <table className="table-sm lg:table text-white ">
                        {/* head */}
                        <thead className="text-[#858584]">

                            <tr className="border border-[#3B3B3B] ">
                                <th className="">
                                    #
                                </th>
                                <th>Artist</th>
                                <th>Change</th>
                                <th>NFTs Sold</th>
                                <th>Volume</th>
                            </tr>

                        </thead>
                        <tbody>


                            {/* row 1 */}
                            {/* loading */}
                            {data?.map((singleArtist, index) => <>
                                <br key={index} />
                                <tr className="bg-[#3B3B3B] ">
                                    <th className="">
                                        <p className="bg-[#2B2B2B] text-[#858584] rounded-full w-[30px] h-[30px] flex items-center justify-center">{index + 1}</p>
                                    </th>
                                    <td className="cursor-pointer">
                                        <Link to={`/artist_page/${singleArtist._id}`}>
                                            <div className="flex items-center space-x-3 ">
                                                <div className="avatar ">
                                                    <div className="mask mask-squircle w-12 h-12 ">
                                                        <img className="" src={singleArtist.artist_img} alt="Avatar " />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold hover:text-red-500">{singleArtist.artist_name}</div>

                                                </div>
                                            </div>
                                        </Link>
                                    </td>

                                    <td>
                                        <p className="text-[#00AC4F]">+1.41%</p>

                                    </td>

                                    <td className="">602</td>
                                    <td className=""><span>12.4</span> <span className="pl-1">ETH</span></td>



                                </tr>
                            </>)}

                        </tbody>


                    </table>
                </div>
                {/* this week table  */}
                <div className={`overflow-x-auto 
                ${activeTab === 2 ?
                        'block'
                        :
                        'hidden'
                    }
                `}>
                    <table className="table text-white ">
                        {/* head */}
                        <thead className="text-[#858584]">

                            <tr className="border border-[#3B3B3B] ">
                                <th className="">
                                    #
                                </th>
                                <th>Artist</th>
                                <th>Change</th>
                                <th>NFTs Sold</th>
                                <th>Volume</th>
                            </tr>

                        </thead>
                        <tbody>

                            <br />
                            {/* row 1 */}
                            {data.slice(2, 5).map((singleArtist, index) => <>
                                <br key={index} />
                                <tr className="bg-[#3B3B3B] ">
                                    <th className="">
                                        <p className="bg-[#2B2B2B] text-[#858584] rounded-full w-[30px] h-[30px] flex items-center justify-center">{index + 1}</p>
                                    </th>
                                    <td className="cursor-pointer">
                                        <Link to={`/artist_page/${singleArtist._id}`}>
                                            <div className="flex items-center space-x-3 ">
                                                <div className="avatar ">
                                                    <div className="mask mask-squircle w-12 h-12 ">
                                                        <img className="" src={singleArtist.artist_img} alt="Avatar " />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold hover:text-red-500">{singleArtist.artist_name}</div>

                                                </div>
                                            </div>
                                        </Link>
                                    </td>

                                    <td>
                                        <p className="text-[#00AC4F]">+1.41%</p>

                                    </td>

                                    <td className="">602</td>
                                    <td className=""><span>12.4</span> <span className="pl-1">ETH</span></td>



                                </tr>
                            </>)}


                        </tbody>


                    </table>
                </div>
                {/* this months table  */}
                <div className={`overflow-x-auto 
                ${activeTab === 3 ?
                        'block'
                        :
                        'hidden'
                    }
                `}>
                    <table className="table text-white ">
                        {/* head */}
                        <thead className="text-[#858584]">

                            <tr className="border border-[#3B3B3B] ">
                                <th className="">
                                    #
                                </th>
                                <th>Artist</th>
                                <th>Change</th>
                                <th>NFTs Sold</th>
                                <th>Volume</th>
                            </tr>

                        </thead>
                        <tbody>


                            {/* row 1 */}
                            {data.slice(3, 5).map((singleArtist, index) => <>
                                <br key={index} />
                                <tr className="bg-[#3B3B3B] ">
                                    <th className="">
                                        <p className="bg-[#2B2B2B] text-[#858584] rounded-full w-[30px] h-[30px] flex items-center justify-center">{index + 1}</p>
                                    </th>
                                    <td className="cursor-pointer">
                                        <Link to={`/artist_page/${singleArtist._id}`}>
                                            <div className="flex items-center space-x-3 ">
                                                <div className="avatar ">
                                                    <div className="mask mask-squircle w-12 h-12 ">
                                                        <img className="" src={singleArtist.artist_img} alt="Avatar " />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold hover:text-red-500">{singleArtist.artist_name}</div>

                                                </div>
                                            </div>
                                        </Link>
                                    </td>

                                    <td>
                                        <p className="text-[#00AC4F]">+1.41%</p>

                                    </td>

                                    <td className="">602</td>
                                    <td className=""><span>12.4</span> <span className="pl-1">ETH</span></td>



                                </tr>
                            </>)}



                        </tbody>


                    </table>
                </div>
                {/* all time table  */}
                <div className={`overflow-x-auto 
                ${activeTab === 4 ?
                        'block'
                        :
                        'hidden'
                    }
                `}>
                    <table className="table text-white ">
                        {/* head */}
                        <thead className="text-[#858584]">

                            <tr className="border border-[#3B3B3B] ">
                                <th className="">
                                    #
                                </th>
                                <th>Artist</th>
                                <th>Change</th>
                                <th>NFTs Sold</th>
                                <th>Volume</th>
                            </tr>

                        </thead>
                        <tbody>


                            {/* row 1 */}
                            {data.slice(0, 3).map((singleArtist, index) => <>
                                <br key={index} />
                                <tr className="bg-[#3B3B3B] ">
                                    <th className="">
                                        <p className="bg-[#2B2B2B] text-[#858584] rounded-full w-[30px] h-[30px] flex items-center justify-center">{index + 1}</p>
                                    </th>
                                    <td className="cursor-pointer">
                                        <Link to={`/artist_page/${singleArtist._id}`}>
                                            <div className="flex items-center space-x-3 ">
                                                <div className="avatar ">
                                                    <div className="mask mask-squircle w-12 h-12 ">
                                                        <img className="" src={singleArtist.artist_img} alt="Avatar " />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold hover:text-red-500">{singleArtist.artist_name}</div>

                                                </div>
                                            </div>
                                        </Link>
                                    </td>

                                    <td>
                                        <p className="text-[#00AC4F]">+1.41%</p>

                                    </td>

                                    <td className="">602</td>
                                    <td className=""><span>12.4</span> <span className="pl-1">ETH</span></td>



                                </tr>
                            </>)}




                        </tbody>


                    </table>
                </div>





            </div>


        </div>
    );
};

export default Rankings;