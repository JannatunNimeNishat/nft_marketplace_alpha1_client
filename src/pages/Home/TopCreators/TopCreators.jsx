import rocket from '../../../../public/banner/RocketLaunch.png'

import c1 from '../../../../public/top_creators/c1.png'
import c2 from '../../../../public/top_creators/c2.png'
import c3 from '../../../../public/top_creators/c3.png'
import c4 from '../../../../public/top_creators/c4.png'
import c5 from '../../../../public/top_creators/c5.png'
import c6 from '../../../../public/top_creators/c6.png'
import c7 from '../../../../public/top_creators/c7.png'
import c8 from '../../../../public/top_creators/c8.png'
import c9 from '../../../../public/top_creators/c9.png'
import c10 from '../../../../public/top_creators/c10.png'
import c11 from '../../../../public/top_creators/c11.png'
import c12 from '../../../../public/top_creators/c12.png'
import useDataFetching from '../../../hooks/useDataFetching'
import { Link } from 'react-router-dom'



const TopCreators = () => {

    const [data] = useDataFetching('http://localhost:5001/artists')
   

    return (
        <div className="my-container mt-32 px-5 lg:px-0">
            <div className='lg:flex justify-between items-center'>
                <div>
                    <h3 className="text-[28px] lg:text-[38px] font-semibold">Top creators</h3>
                    <p className="text-[16px] lg:text-[22px]">Checkout Top Rated Creators on the NFT Marketplace</p>
                </div>

                <Link to={'/rankings'}>
                    <button className='  hover:bg-black hover:border-black hover:text-white hidden lg:flex gap-3 items-center border border-[#A259FF] rounded-[20px] h-[60px] px-[50px] my-hover-effect'>
                        <img src={rocket} alt="" />
                        <p className='text-[16px] font-semibold'>View Rankings</p>
                    </button>
                </Link>
            </div>

            <div className='mt-14 grid grid-cols-1 lg:grid-cols-4 gap-8'>

                {
                    data?.map((item, index) => <div
                        key={item._id}
                        className='bg-[#3B3B3B] rounded-[20px] p-5 flex flex-col items-center justify-center relative my-hover-effect'
                    >
                        <img src={item?.artist_img} alt="" />
                        <h3 className='text-[22px] font-semibold pt-5'>{item?.artist_name}</h3>
                        <p><span className='text-[#858584] mr-2'>Total Sales</span>{item?.nfts_sold} ETH</p>
                        <p className='bg-[#2B2B2B] text-[#858584] w-[25px] rounded-full flex items-center justify-center absolute left-5 top-[22px]'>{index + 1}</p>
                    </div>)
                }

                {
                    /*  data?.map((index, item) => <div
                         key={item.index}
                         className='bg-[#3B3B3B] rounded-[20px] p-5 flex flex-col items-center justify-center relative'>
                         <img src={item?.artist_img} alt="" />
                         <h3 className='text-[22px] font-semibold pt-5'>{item?.artist_name}</h3>
                         <p><span className='text-[#858584] mr-2'>Total Sales</span>{item?.nfts_sold} ETH</p>
                         <p className='bg-[#2B2B2B] text-[#858584] w-[25px] rounded-full flex items-center justify-center absolute left-5 top-[22px]'>{index}</p>
                     </div>) */
                }


                {/* 1st */}
                {/* <div className='bg-[#3B3B3B] rounded-[20px] p-5 flex flex-col items-center justify-center relative'>
                    <img src={c1} alt="" />
                    <h3 className='text-[22px] font-semibold pt-5'>Keepitreal</h3>
                    <p><span className='text-[#858584] mr-2'>Total Sales</span>34.53 ETH</p>
                    <p className='bg-[#2B2B2B] text-[#858584] w-[25px] rounded-full flex items-center justify-center absolute left-5 top-[22px]'>1</p>
                </div> */}

                {/* 2nd */}
                {/*  <div className='bg-[#3B3B3B] rounded-[20px] p-5 flex flex-col items-center justify-center relative'>
                    <img src={c2} alt="" />
                    <h3 className='text-[22px] font-semibold pt-5'>DigiLab</h3>
                    <p><span className='text-[#858584] mr-2'>Total Sales</span>34.53 ETH</p>
                    <p className='bg-[#2B2B2B] text-[#858584] w-[25px] rounded-full flex items-center justify-center absolute left-5 top-[22px]'>2</p>
                </div> */}

                {/* 3rd */}
                {/*  <div className='bg-[#3B3B3B] rounded-[20px] p-5 flex flex-col items-center justify-center relative'>
                    <img src={c3} alt="" />
                    <h3 className='text-[22px] font-semibold pt-5'>GravityOne</h3>
                    <p><span className='text-[#858584] mr-2'>Total Sales</span>34.53 ETH</p>
                    <p className='bg-[#2B2B2B] text-[#858584] w-[25px] rounded-full flex items-center justify-center absolute left-5 top-[22px]'>3</p>
                </div> */}

                {/* 4th */}
                {/*  <div className='bg-[#3B3B3B] rounded-[20px] p-5 flex flex-col items-center justify-center relative'>
                    <img src={c4} alt="" />
                    <h3 className='text-[22px] font-semibold pt-5'>Juanie</h3>
                    <p><span className='text-[#858584] mr-2'>Total Sales</span>34.53 ETH</p>
                    <p className='bg-[#2B2B2B] text-[#858584] w-[25px] rounded-full flex items-center justify-center absolute left-5 top-[22px]'>4</p>
                </div> */}

                {/* 5th */}
                {/*  <div className='bg-[#3B3B3B] rounded-[20px] p-5 flex flex-col items-center justify-center relative'>
                    <img src={c5} alt="" />
                    <h3 className='text-[22px] font-semibold pt-5'>BlueWhale</h3>
                    <p><span className='text-[#858584] mr-2'>Total Sales</span>34.53 ETH</p>
                    <p className='bg-[#2B2B2B] text-[#858584] w-[25px] rounded-full flex items-center justify-center absolute left-5 top-[22px]'>5</p>
                </div> */}

                {/* 6th */}
                {/* <div className='bg-[#3B3B3B] rounded-[20px] p-5 flex flex-col items-center justify-center relative'>
                    <img src={c6} alt="" />
                    <h3 className='text-[22px] font-semibold pt-5'>mr fox</h3>
                    <p><span className='text-[#858584] mr-2'>Total Sales</span>34.53 ETH</p>
                    <p className='bg-[#2B2B2B] text-[#858584] w-[25px] rounded-full flex items-center justify-center absolute left-5 top-[22px]'>6</p>
                </div> */}

                {/* 7th */}
                {/*  <div className='bg-[#3B3B3B] rounded-[20px] p-5 flex flex-col items-center justify-center relative'>
                    <img src={c7} alt="" />
                    <h3 className='text-[22px] font-semibold pt-5'>Shroomie</h3>
                    <p><span className='text-[#858584] mr-2'>Total Sales</span>34.53 ETH</p>
                    <p className='bg-[#2B2B2B] text-[#858584] w-[25px] rounded-full flex items-center justify-center absolute left-5 top-[22px]'>7</p>
                </div> */}

                {/* 8th */}
                {/*  <div className='bg-[#3B3B3B] rounded-[20px] p-5 flex flex-col items-center justify-center relative'>
                    <img src={c8} alt="" />
                    <h3 className='text-[22px] font-semibold pt-5'>robotica</h3>
                    <p><span className='text-[#858584] mr-2'>Total Sales</span>34.53 ETH</p>
                    <p className='bg-[#2B2B2B] text-[#858584] w-[25px] rounded-full flex items-center justify-center absolute left-5 top-[22px]'>8</p>
                </div> */}

                {/* 9th */}
                {/* <div className='bg-[#3B3B3B] rounded-[20px] p-5 flex flex-col items-center justify-center relative'>
                    <img src={c9} alt="" />
                    <h3 className='text-[22px] font-semibold pt-5'>RustyRobot</h3>
                    <p><span className='text-[#858584] mr-2'>Total Sales</span>34.53 ETH</p>
                    <p className='bg-[#2B2B2B] text-[#858584] w-[25px] rounded-full flex items-center justify-center absolute left-5 top-[22px]'>9</p>
                </div> */}

                {/* 10th */}
                {/* <div className='bg-[#3B3B3B] rounded-[20px] p-5 flex flex-col items-center justify-center relative'>
                    <img src={c10} alt="" />
                    <h3 className='text-[22px] font-semibold pt-5'>animakid</h3>
                    <p><span className='text-[#858584] mr-2'>Total Sales</span>34.53 ETH</p>
                    <p className='bg-[#2B2B2B] text-[#858584] w-[25px] rounded-full flex items-center justify-center absolute left-5 top-[22px]'>10</p>
                </div> */}

                {/* 11th */}
                {/* <div className='bg-[#3B3B3B] rounded-[20px] p-5 flex flex-col items-center justify-center relative'>
                    <img src={c11} alt="" />
                    <h3 className='text-[22px] font-semibold pt-5'>Dotgu</h3>
                    <p><span className='text-[#858584] mr-2'>Total Sales</span>34.53 ETH</p>
                    <p className='bg-[#2B2B2B] text-[#858584] w-[25px] rounded-full flex items-center justify-center absolute left-5 top-[22px]'>11</p>
                </div> */}

                {/* 12th */}
                {/*   <div className='bg-[#3B3B3B] rounded-[20px] p-5 flex flex-col items-center justify-center relative'>
                    <img src={c12} alt="" />
                    <h3 className='text-[22px] font-semibold pt-5'>Ghiblier</h3>
                    <p><span className='text-[#858584] mr-2'>Total Sales</span>34.53 ETH</p>
                    <p className='bg-[#2B2B2B] text-[#858584] w-[25px] rounded-full flex items-center justify-center absolute left-5 top-[22px]'>12</p>
                </div> */}


            </div>

            <button className='   hover:bg-black hover:border-black hover:text-white  flex lg:hidden gap-3 items-center justify-center border border-[#A259FF] rounded-[20px] h-[60px] w-full mt-8'>
                <img src={rocket} alt="" />
                <p className='text-[16px] font-semibold'>View Rankings</p>
            </button>
        </div>
    );
};

export default TopCreators;