

import h1 from '../../../../public/how_it_works/h1.png'
import h2 from '../../../../public/how_it_works/h2.png'
import h3 from '../../../../public/how_it_works/h3.png'

const HowItWorks = () => {
    return (
        <div className='mt-32'> 
            <div className='my-container px-5 lg:px-0 '>
                <div>
                    <h3 className="text-[28px] lg:text-[38px] font-semibold">How It Works</h3>
                    <p className="text-[16px] lg:text-[22px]">Find out how to get started</p>
                </div>
                {/* cards */}
                <div className='mt-11 grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    {/* 1st */}
                    <div className='bg-[#3B3B3B] rounded-[20px] px-[30px] pt-[10px] pb-[30px] '>
                        <figure className='h-[250px] w-[250px]  mx-auto'>
                        <img className='h-full w-full' src={h1} alt="" />
                        </figure>
                        <div className='pt-5 text-center'>
                            <h3 className='text-[22px] font-semibold'>Setup Your wallet</h3>
                            <p className='pt-2 '>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
                        </div>
                    </div>
                    {/* 2nd */}
                    <div className='bg-[#3B3B3B] rounded-[20px] px-[30px] pt-[10px] pb-[30px] '>
                        <figure className='h-[250px] w-[250px]  mx-auto'>
                        <img className='h-full w-full' src={h2} alt="" />
                        </figure>
                        <div className='pt-5 text-center'>
                            <h3 className='text-[22px] font-semibold'>Create Collection</h3>
                            <p className='pt-2 '>Upload your work and setup your collection. Add a description, social links and floor price.</p>
                        </div>
                    </div>
                    {/* 3rd */}
                    <div className='bg-[#3B3B3B] rounded-[20px] px-[30px] pt-[10px] pb-[30px] '>
                        <figure className='h-[250px] w-[250px]  mx-auto'>
                        <img className='h-full w-full' src={h3} alt="" />
                        </figure>
                        <div className='pt-5 text-center'>
                            <h3 className='text-[22px] font-semibold'>Start Earning</h3>
                            <p className='pt-2 '>Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.h</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default HowItWorks;