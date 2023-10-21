import magnifyingGlass from '../../assets/marketplace/MagnifyingGlass.png'
import m1 from '../../assets/marketplace/m1.png'
import m2 from '../../assets/marketplace/m2.png'
import m3 from '../../assets/marketplace/m3.png'
import m4 from '../../assets/marketplace/m4.png'
import m5 from '../../assets/marketplace/m5.png'
import m6 from '../../assets/marketplace/m6.png'
import m7 from '../../assets/marketplace/m7.png'
import m8 from '../../assets/marketplace/m8.png'
import m9 from '../../assets/marketplace/m9.png'
import m10 from '../../assets/marketplace/m10.png'
import m11 from '../../assets/marketplace/m11.png'
import m12 from '../../assets/marketplace/m12.png'

import d1User from '../../assets/marketplace/d1User.png'
import d2User from '../../assets/marketplace/d2User.png'
import d3User from '../../assets/marketplace/d3User.png'
import { useState } from 'react'
const Marketplace = () => {

    const [activeTab, setActiveTab] = useState(false)

    return (
        <div>
            <div className="lg:w-[1000px]  lg:py-[50px] mx-auto px-5 lg:px-0">
                <h3 className="text-[22px] lg:text-[51px] font-bold">Browse Marketplace</h3>
                <p className="text-[16px] lg:text-[22px] pt-1">Browse through more than 50k NFTs on the NFT Marketplace.</p>
                <div className="pt-8 flex items-center">
                    <input className="border border-[#3B3B3B] w-full bg-transparent py-3 px-5 rounded-[20px]" type="email" name="" id="" placeholder="Search your favourite NFTs" />
                    <img className='-ml-10' src={magnifyingGlass} alt="" />
                </div>
            </div>
            <div className='h-[1px] w-full bg-[#3B3B3B] mt-8'></div>

            <div className=' w-2/3 lg:w-[1000px] pt-5 mx-auto flex gap-10 px-5 lg:px-0'>

                {/* NFTs */}
                <div className='cursor-pointer' onClick={() => setActiveTab(!activeTab)}>

                    <div className='flex gap-4 items-center justify-center lg:w-[525px] h-[60px]'>
                        <h3 className={`text-[16px] lg:text-[22px] ${activeTab === false ? '':'text-[#858584]'}`}>NFTs</h3>
                        <div className="hidden lg:block badge bg-[#858584] text-white border-0">302</div>
                    </div>
                    <div className={`
                    h-[2px] w-full bg-[#858584]
                    ${activeTab === true ?
                            'hidden'
                            :
                            'block'
                        }
                    `} ></div>
                </div>

                {/* collections */}
                <div className='cursor-pointer' onClick={() => setActiveTab(!activeTab)}>

                    <div className='flex gap-4 items-center justify-center lg:w-[525px] h-[60px]'>
                        <h3 className={`text-[16px] lg:text-[22px] ${activeTab === false ? 'text-[#858584]':''}`}>Collections</h3>
                        <div className="hidden lg:block badge bg-[#858584] text-white border-0">67</div>
                    </div>
                    <div className={`
                    h-[2px] w-full bg-[#858584]
                    ${activeTab === false ?
                            'hidden'
                            :
                            'block'
                        }
                    `} ></div>
                </div>
            </div>

            {/* cards */}
            <div className=' bg-[#3b3b3b] py-8 lg:py-16 px-5 lg:px-0'>
                {/* NFTs  cards */}
                <div className={`
                grid grid-cols-1 lg:grid-cols-3 gap-8 lg:w-[1000px] pt-5 mx-auto
                ${activeTab === true ?
                        'hidden'
                        :
                        ''
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
                                <img src={d1User} alt="" />
                                <p>Shroomie</p>
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
                                <img src={d2User} alt="" />
                                <p>NebulaKid</p>
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
                                <img src={d3User} alt="" />
                                <p>Spaceone</p>
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
                                <img src={d3User} alt="" />
                                <p>Spaceone</p>
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
                                <img src={d1User} alt="" />
                                <p>Spaceone</p>
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
                                <img src={d2User} alt="" />
                                <p>Spaceone</p>
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
                                <img src={d1User} alt="" />
                                <p>Spaceone</p>
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
                                <img src={d2User} alt="" />
                                <p>Spaceone</p>
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
                    {/* 9th */}
                    <div className='bg-[#2b2b2b] rounded-[20px]'>

                        <figure className='w-full h-[296px] '>
                            <img className='w-full h-full' src={m8} alt="" />
                        </figure>

                        <div className='px-7 pt-5 pb-6'>

                            <h3 className='text-[22px] font-semibold'>Sunset Dimension</h3>

                            <div className='flex items-center gap-2 pt-[5px]'>
                                <img src={d1User} alt="" />
                                <p>Spaceone</p>
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
                    {/* 10th */}
                    <div className='bg-[#2b2b2b] rounded-[20px]'>

                        <figure className='w-full h-[296px] '>
                            <img className='w-full h-full' src={m9} alt="" />
                        </figure>

                        <div className='px-7 pt-5 pb-6'>

                            <h3 className='text-[22px] font-semibold'>Desert Walk</h3>

                            <div className='flex items-center gap-2 pt-[5px]'>
                                <img src={d2User} alt="" />
                                <p>Spaceone</p>
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
                    {/* 11th */}
                    <div className='bg-[#2b2b2b] rounded-[20px]'>

                        <figure className='w-full h-[296px] '>
                            <img className='w-full h-full' src={m10} alt="" />
                        </figure>

                        <div className='px-7 pt-5 pb-6'>

                            <h3 className='text-[22px] font-semibold'>IceCream Ape 0324</h3>

                            <div className='flex items-center gap-2 pt-[5px]'>
                                <img src={d3User} alt="" />
                                <p>Spaceone</p>
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
                    {/* 12th */}
                    <div className='bg-[#2b2b2b] rounded-[20px] '>

                        <figure className='w-full h-[296px] '>
                            <img className='w-full h-full' src={m11} alt="" />
                        </figure>

                        <div className='px-7 pt-5 pb-6'>

                            <h3 className='text-[22px] font-semibold'>Colorful Dog 0344</h3>

                            <div className='flex items-center gap-2 pt-[5px]'>
                                <img src={d1User} alt="" />
                                <p>Spaceone</p>
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

                {/* collections  cards */}
                <div className={`
                grid grid-cols-1 lg:grid-cols-3 gap-8 lg:w-[1000px] pt-5 mx-auto
                ${activeTab === true ?
                        ''
                        :
                        'hidden'
                    }
                
                `}>

                    {/* 9th */}
                    <div className='bg-[#2b2b2b] rounded-[20px]'>

                        <figure className='w-full h-[296px] '>
                            <img className='w-full h-full' src={m8} alt="" />
                        </figure>

                        <div className='px-7 pt-5 pb-6'>

                            <h3 className='text-[22px] font-semibold'>Sunset Dimension</h3>

                            <div className='flex items-center gap-2 pt-[5px]'>
                                <img src={d1User} alt="" />
                                <p>Spaceone</p>
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
                    {/* 10th */}
                    <div className='bg-[#2b2b2b] rounded-[20px]'>

                        <figure className='w-full h-[296px] '>
                            <img className='w-full h-full' src={m9} alt="" />
                        </figure>

                        <div className='px-7 pt-5 pb-6'>

                            <h3 className='text-[22px] font-semibold'>Desert Walk</h3>

                            <div className='flex items-center gap-2 pt-[5px]'>
                                <img src={d2User} alt="" />
                                <p>Spaceone</p>
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
                    {/* 11th */}
                    <div className='bg-[#2b2b2b] rounded-[20px]'>

                        <figure className='w-full h-[296px] '>
                            <img className='w-full h-full' src={m10} alt="" />
                        </figure>

                        <div className='px-7 pt-5 pb-6'>

                            <h3 className='text-[22px] font-semibold'>IceCream Ape 0324</h3>

                            <div className='flex items-center gap-2 pt-[5px]'>
                                <img src={d3User} alt="" />
                                <p>Spaceone</p>
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
                    {/* 12th */}
                    <div className='bg-[#2b2b2b] rounded-[20px] '>

                        <figure className='w-full h-[296px] '>
                            <img className='w-full h-full' src={m11} alt="" />
                        </figure>

                        <div className='px-7 pt-5 pb-6'>

                            <h3 className='text-[22px] font-semibold'>Colorful Dog 0344</h3>

                            <div className='flex items-center gap-2 pt-[5px]'>
                                <img src={d1User} alt="" />
                                <p>Spaceone</p>
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
                                <img src={d3User} alt="" />
                                <p>Spaceone</p>
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
                                <img src={d1User} alt="" />
                                <p>Spaceone</p>
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
                                <img src={d2User} alt="" />
                                <p>Spaceone</p>
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
                                <img src={d1User} alt="" />
                                <p>Spaceone</p>
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
                                <img src={d2User} alt="" />
                                <p>Spaceone</p>
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
                                <img src={d1User} alt="" />
                                <p>Shroomie</p>
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
                                <img src={d2User} alt="" />
                                <p>NebulaKid</p>
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
                                <img src={d3User} alt="" />
                                <p>Spaceone</p>
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
    );
};

export default Marketplace;