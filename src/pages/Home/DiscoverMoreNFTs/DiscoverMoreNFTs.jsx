import eye from '../../../../public/discover_more_nfts/Eye.png'
import d1 from '../../../../public/discover_more_nfts/d1.png'
import d1User from '../../../../public/discover_more_nfts/d1User.png'
import d2 from '../../../../public/discover_more_nfts/d2.png'
import d2User from '../../../../public/discover_more_nfts/d2User.png'
import d3 from '../../../../public/discover_more_nfts/d3.png'
import d3User from '../../../../public/discover_more_nfts/d3User.png'

const DiscoverMoreNFTs = () => {
    return (
        <div className="my-container mt-32 px-5 lg:px-0">
            <div className='lg:flex justify-between items-center'>
                <div>
                    <h3 className="text-[28px] lg:text-[38px] font-semibold">Discover More NFTs</h3>
                    <p className="text-[16px] lg:text-[22px]">Explore new trending NFTs</p>
                </div>

                <button className='  hover:bg-black hover:border-black hover:text-white hidden lg:flex gap-3 items-center border border-[#A259FF] rounded-[20px] h-[60px] px-[50px]'>
                    <img src={eye} alt="" />
                    <p className='text-[16px] font-semibold'>See All</p>
                </button>
            </div>

            {/* cards */}
            <div className='mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8'>

                {/* 1st */}
                <div className='bg-[#3b3b3b] rounded-[20px] my-hover-effect'>

                    <figure className='w-full h-[296px] '>
                        <img className='w-full h-full' src={d1} alt="" />
                    </figure>

                    <div className='px-7 pt-5 pb-6'>

                        <h3 className='text-[22px] font-semibold'>Distant Galaxy</h3>

                        <div className='flex items-center gap-2 pt-[5px]'>
                            <img src={d1User} alt="" />
                            <p>MoonDancer</p>
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
                <div className='bg-[#3b3b3b] rounded-[20px] my-hover-effect'>

                    <figure className='w-full h-[296px] '>
                        <img className='w-full h-full' src={d2} alt="" />
                    </figure>

                    <div className='px-7 pt-5 pb-6'>

                        <h3 className='text-[22px] font-semibold'>Life On Edena</h3>

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
                <div className='bg-[#3b3b3b] rounded-[20px] my-hover-effect'>

                    <figure className='w-full h-[296px] '>
                        <img className='w-full h-full' src={d3} alt="" />
                    </figure>

                    <div className='px-7 pt-5 pb-6'>

                        <h3 className='text-[22px] font-semibold'>AstroFiction</h3>

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
            <button className='  hover:bg-black hover:border-black hover:text-white flex  justify-center lg:hidden gap-3 items-center border border-[#A259FF] rounded-[20px] h-[60px] w-full mt-10'>
                <img src={eye} alt="" />
                <p className='text-[16px] font-semibold'>See All</p>
            </button>

        </div>
    );
};

export default DiscoverMoreNFTs;