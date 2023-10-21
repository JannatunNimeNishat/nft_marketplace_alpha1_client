
import bannerImg from '../../../../public/banner/bannerImg.png'
import b1 from '../../../../public/banner/b1.png'
import rocket from '../../../../public/banner/RocketLaunch.png'

const Banner = () => {
    return (
        <div className="mt-10  px-5 lg:px-0 my-container">
            <div className="rounded-md lg:flex">
                {/* <div className="w-[1200px] px-10   rounded-md flex   text-center"> */}
                <div className='w-full lg:w-1/2 '>

                    <h3 className='hidden lg:block text-[47px] font-bold leading-tight'>Discover <br /> Digital Art & <br /> Collect NFTs</h3>

                    <h3 className='block lg:hidden text-[26px] font-bold leading-tight'>Discover Digital Art & <br /> Collect NFTs</h3>


                    <p className='hidden lg:block mt-5 text-xl'>
                        NFT marketplace UI created with Anima for <br /> Figma. Collect, buy and sell art from more <br /> than 20k NFT artists.
                    </p>

                    <p className=' block mt-3 lg:mt-5 '>
                        NFT marketplace UI created with Anima for <br />  Figma. Collect, buy and sell art from more <br /> than 20k NFT artists.
                    </p>

                    <button className='my-[30px] bg-[#A259FF] rounded-[20px] px-[50px] hidden lg:flex items-center gap-2 h-[60px] 
                    btn-hover my-hover-effect
                    '>
                        <img src={rocket}></img>
                        <p className='font-semibold'>Get Started</p>
                    </button>

                    <div className='hidden lg:grid grid-cols-3  lg:mr-20'>
                        <div className=''>
                            <h3 className='text-[22px] font-semibold'>240k+</h3>
                            <p className=' text-[18px]'>Total Sale</p>
                        </div>
                        <div className=''>
                            <h3 className='text-[22px] font-semibold'>100k+</h3>
                            <p className=' text-[18px]'>Auctions</p>
                        </div>
                        <div className=''>
                            <h3 className='text-[22px] font-semibold'>240k+</h3>
                            <p className=' text-[18px]'>Artists</p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 rounded-lg mt-8 lg:mt-0'>
                    <figure className='lg:h-[370px] lg:w-[510px]'>
                        <img className='h-full w-full ' src={bannerImg}></img>
                    </figure>
                    <div className='lg:h-[109px] lg:w-[510px] py-5 px-6 bg-[#3B3B3B] rounded-lg '>
                        <h3 className='font-semibold text-xl text-left'>Space Walking</h3>
                        <div className='flex items-center gap-2 pt-3'>
                            <img src={b1} alt="figure" />
                            <p>Animakid</p>
                        </div>
                    </div>


                </div>
            </div>

            <div className='  mt-10 lg:mt-0 '>
                <button className='w-full bg-[#A259FF] rounded-[20px] px-[50px]  flex lg:hidden items-center justify-center gap-2 h-[60px] btn-hover'>
                    <img src={rocket}></img>
                    <p className='font-semibold'>Get Started</p>
                </button>

                <div className='grid lg:hidden grid-cols-3  text-center pt-5'>
                    <div className=''>
                        <h3 className='text-[22px] font-semibold'>240k+</h3>
                        <p className=' text-[18px]'>Total Sale</p>
                    </div>
                    <div className=''>
                        <h3 className='text-[22px] font-semibold'>100k+</h3>
                        <p className=' text-[18px]'>Auctions</p>
                    </div>
                    <div className=''>
                        <h3 className='text-[22px] font-semibold'>240k+</h3>
                        <p className=' text-[18px]'>Artists</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;