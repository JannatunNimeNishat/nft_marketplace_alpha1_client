import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import artistHero from '../../assets/artistpage/artist_hero.png'
import copy from '../../assets/artistpage/Copy.png'
import plus from '../../assets/artistpage/Plus.png'

import web from '../../assets/artistpage/Globe.png'
import discordLogo from '../../assets/artistpage/DiscordLogo.png'
import tweeterLogo from '../../assets/artistpage/TwitterLogo.png'
import youtubeLogo from '../../assets/artistpage/YoutubeLogo.png'
import instaLogo from '../../assets/artistpage/InstagramLogo.png'


// card img
import m1 from '../../assets/marketplace/m1.png'
import m2 from '../../assets/marketplace/m2.png'
import m3 from '../../assets/marketplace/m3.png'
import m4 from '../../assets/marketplace/m4.png'
import m5 from '../../assets/marketplace/m5.png'
import m6 from '../../assets/marketplace/m6.png'
import m7 from '../../assets/marketplace/m7.png'
import m12 from '../../assets/marketplace/m12.png'
import useDataFetching from "../../hooks/useDataFetching";

import Loading from "../Loading/Loading";



const ArtistPage = () => {

    const artist_id = useParams();
    console.log(artist_id);
    const [data,loading] = useDataFetching(`http://localhost:5001/artists/${artist_id?.id}`);
    const [activeTab, setActiveTab] = useState(1);

    console.log(data);

    if(loading){
        return <Loading/>
    }

    return (
        <div>
            <figure className="w-full h-[295px]">
                <img className="w-full h-full" src={artistHero} alt="" />
            </figure>

            <div className="my-container">

                {/* hero */}
                <figure className="-mt-16 w-1/2 lg:w-full  mx-auto">
                    <img className=" border-2 border-black rounded-full" src={data?.artist_img} alt="" />
                </figure>


                <div className="mt-[20px] lg:mt-[40px] px-5 lg:px-0">
                    {/* profile */}
                    <div className="lg:flex items-center justify-between">

                        <h3 className="text-[28px] lg:text-[51px] font-bold">{data?.artist_name}</h3>

                        <div className="lg:flex gap-5 mt-[30px]">
                            <button className="w-full lg:w-[168px] h-[60px] rounded-[20px] bg-[#A259FF] font-bold flex items-center justify-center gap-2">
                                <img src={copy} alt="" />
                                <p>0xc{data?.artist_name}</p>
                            </button>

                            <button className="mt-5 lg:mt-0 w-full lg:w-[168px] h-[60px] rounded-[20px] border-2 border-[#A259FF] font-bold flex items-center justify-center gap-2">
                                <img src={plus} alt="" />
                                <p>Follow</p>
                            </button>
                        </div>
                    </div>
                    {/* info */}
                    <div className="mt-10 flex gap-5 justify-between lg:justify-normal">
                        <div>
                            <h3 className="text-[22px] lg:text-[28px] font-bold">{data?.volume}+</h3>
                            <p className="lg:text-[22px]">Volume</p>
                        </div>
                        <div>
                            <h3 className="text-[22px] lg:text-[28px] font-bold">{data?.nfts_sold}+</h3>
                            <p className="lg:text-[22px]">NFTs Sold</p>
                        </div>
                        <div>
                            <h3 className="text-[22px] lg:text-[28px] font-bold">{data?.followers}+</h3>
                            <p className="lg:text-[22px]">Followers</p>
                        </div>
                    </div>
                    {/* bio */}
                    <div className="mt-10">
                        <h3 className="text-[#858584] lg:text-[22px] font-bold">Bio</h3>
                        <p className=" lg:text-[22px]">{data?.bio}</p>
                    </div>

                    {/* Links */}
                    <div className="mt-10">
                        <h3 className="text-[#858584] lg:text-[22px] font-bold">Links</h3>
                        <div className="mt-[10px] flex gap-[10px]">
                            <Link to={'#'}>
                                <img src={web} alt="" />
                            </Link>
                            <Link to={`#`}>
                                {/* <Link to={`${data?.links?.discord_link}`}> */}
                                <img src={discordLogo} alt="" />
                            </Link>
                            <Link to={`#`}>
                                {/* <Link to={`${data?.links?.youtube_link}`}> */}
                                <img src={youtubeLogo} alt="" />
                            </Link>
                            <Link to={`#`}>
                                {/* <Link to={`${data?.links?.tweeter_link}`}> */}
                                <img src={tweeterLogo} alt="" />

                            </Link>

                            <Link to={`#`}>
                                {/* <Link to={`${data?.links?.instagram_link}`}> */}

                                <img src={instaLogo} alt="" />

                            </Link>

                        </div>
                    </div>
                    <div className='h-[1px] w-full bg-[#3B3B3B] mt-[40px] mb-[10px]'></div>
                    {/* tab heads */}
                    <div className=" flex justify-between  gap-8 lg:gap-3 w-11/12  lg:w-full  mx-auto">
                        {/* created */}
                        <div className='cursor-pointer' onClick={() => setActiveTab(1)}>

                            <div className='flex gap-3 items-center justify-center lg:w-[262px] h-[60px]'>
                                <h3 className={` text-[16px] lg:text-[22px] ${activeTab === 1 ? '' : 'text-[#858584]'}`}>Created</h3>

                                <div className={`hidden lg:block badge  text-white border-0  
                                ${activeTab === 1 ? 'bg-[#858584]' : 'bg-[#3B3B3B]'}
                                `}>302</div>


                            </div>
                            <div className={`
                                    h-[2px] w-full bg-[#858584]
                                    ${activeTab === 1 ?
                                    'block'
                                    :
                                    'hidden'
                                }
                                `}>

                            </div>
                        </div>

                        {/* Owned */}
                        <div className='cursor-pointer' onClick={() => setActiveTab(2)}>

                            <div className='flex gap-3  items-center justify-center lg:w-[262px] h-[60px]'>
                                <h3 className={` text-[16px] lg:text-[22px] ${activeTab === 2 ? '' : 'text-[#858584]'}`}>Owned</h3>

                                <div className={`hidden lg:block badge  text-white border-0  
                                ${activeTab === 2 ? 'bg-[#858584]' : 'bg-[#3B3B3B]'}
                                `}>67</div>


                            </div>
                            <div className={`
                                    h-[2px] w-full bg-[#858584]
                                    ${activeTab === 2 ?
                                    'block'
                                    :
                                    'hidden'
                                }
                                `}>

                            </div>
                        </div>

                        {/* Collection */}
                        <div className='cursor-pointer' onClick={() => setActiveTab(3)}>

                            <div className='flex gap-3 items-center justify-center lg:w-[262px] h-[60px]'>
                                <h3 className={` text-[16px] lg:text-[22px] ${activeTab === 3 ? '' : 'text-[#858584]'}`}>Collection</h3>
                                <div className={`hidden lg:block badge  text-white border-0  
                                ${activeTab === 4 ? 'bg-[#858584]' : 'bg-[#3B3B3B]'}
                                `}>302</div>

                            </div>
                            <div className={`
                                    h-[2px] w-full bg-[#858584]
                                    ${activeTab === 3 ?
                                    'block'
                                    :
                                    'hidden'
                                }
                                `}>

                            </div>
                        </div>


                    </div>
                </div>
            </div>


            {/* tab container */}
            <div className="bg-[#3B3B3B]">
                <div className="my-container pt-[60px] pb-[100px] px-5 lg:px-0">

                    {/* NFTs  cards */}
                    <div className={`
                grid grid-cols-1 lg:grid-cols-3 gap-8 lg:w-[1000px] pt-5 mx-auto
                ${activeTab === 1 ?
                            'block'
                            :
                            'hidden'
                        }
                
                `}>

                        {/* 1st */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m1} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Magic Mushroom 0325</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 2nd */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m2} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Happy Robot 032</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 3rd */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m3} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Happy Robot 024</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 4th */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m4} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Designer Bear</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 5th */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m5} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Colorful Dog 0356</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 6th */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m12} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Dancing Robot 0312</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 7th */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m6} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Cherry Blossom Girl 035</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 8th */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m7} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Space Travel</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/*  NFTs Owned  cards */}
                    <div className={`
                grid grid-cols-1 lg:grid-cols-3 gap-8 lg:w-[1000px] pt-5 mx-auto
                ${activeTab === 2 ?
                            'block'
                            :
                            'hidden'
                        }
                
                `}>

                        {/* 6th */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m12} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Dancing Robot 0312</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 7th */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m6} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Cherry Blossom Girl 035</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 8th */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m7} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Space Travel</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 1st */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m1} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Magic Mushroom 0325</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 2nd */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m2} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Happy Robot 032</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 3rd */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m3} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Happy Robot 024</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 4th */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m4} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Designer Bear</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 5th */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m5} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Colorful Dog 0356</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                    {/*  NFTs Collection  cards */}
                    <div className={`
                grid grid-cols-1 lg:grid-cols-3 gap-8 lg:w-[1000px] pt-5 mx-auto
                ${activeTab === 3 ?
                            'block'
                            :
                            'hidden'
                        }
                
                `}>

                        {/* 4th */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m4} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Designer Bear</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 5th */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m5} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Colorful Dog 0356</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 6th */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m12} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Dancing Robot 0312</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 1st */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m1} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Magic Mushroom 0325</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 2nd */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m2} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Happy Robot 032</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 3rd */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m3} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Happy Robot 024</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 7th */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m6} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Cherry Blossom Girl 035</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 8th */}
                        <div className='bg-[#2b2b2b] rounded-[20px]'>

                            <figure className='w-full h-[296px] '>
                                <img className='w-full h-full' src={m7} alt="" />
                            </figure>

                            <div className='px-7 pt-5 pb-6'>

                                <h3 className='text-[22px] font-semibold'>Space Travel</h3>

                                <div className='flex items-center gap-2 pt-[5px]'>
                                    <img className="h-[24px] w-[24px]" src={data?.artist_img} alt="" />
                                    <p>{data?.artist_name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex justify-between text-[#858584]'>
                                        <small>Price</small>
                                        <small>Highest Bid</small>
                                    </p>
                                    <div className='flex justify-between'>
                                        <p>1.63 ETH</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ArtistPage;