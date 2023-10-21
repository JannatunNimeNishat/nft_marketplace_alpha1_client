import logo from '../../../../public/navbar/logo.png'
import discord from '../../../../public/footer/DiscordLogo.png'
import youtube from '../../../../public/footer/YoutubeLogo.png'
import tweeter from '../../../../public/footer/TwitterLogo.png'
import instagram from '../../../../public/footer/InstagramLogo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="bg-[#3B3B3B] mt-20">
            <div className="my-container py-7 px-5 lg:px-0">
                <footer className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-white   justify-between">
                    <div className=' w-full '>
                        <span className=" flex items-center gap-4">
                            <img src={logo} alt="" />
                            <p className='text-2xl font-semibold'>NFT Marketplace</p>
                        </span>
                        <p className='pt-8 text-[#CCC] '>NFT marketplace UI created <br /> with Anima for Figma.</p>
                        <p className='pt-6 text-[#CCC]'>Join our community</p>
                        <div className='flex justify-between w-1/2 pt-1'>
                            <img src={discord} alt="" />
                            <img src={youtube} alt="" />
                            <img src={tweeter} alt="" />
                            <img src={instagram} alt="" />
                        </div>

                    </div>
                    <div className='w-full'>
                        <span className='text-2xl font-semibold'>Explore</span>
                        <div className='flex flex-col pt-6'>
                            <Link to='/marketplace' className='text-[#CCC] '>Marketplace</Link>
                            <Link to='/rankings' className='text-[#CCC] pt-5'>Ranking</Link>
                            <Link to='/connect-a-Wallet' className='text-[#CCC] pt-5'>Connect a wallet</Link>
                        </div>
                    </div>

                    <div className='w-full'>
                        <span className="text-2xl font-semibold">Join our weekly digest</span>
                        <p className='pt-6 pb-5 text-[#CCC]'>Get exclusive promotions & updates <br /> straight to your inbox.</p>

                        <div className='lg:flex '>
                            <input className='w-full  px-5 py-4 bg-white rounded-[20px] ' type="email" name="" id="" placeholder='Enter your email here' />
                            <div className='cursor-pointer mt-3 lg:mt-0 lg:w-2/3  flex items-center justify-center lg:justify-start gap-2 bg-[#A259FF] rounded-[20px] px-5 py-4 lg:-ml-8'>
                                <img src="" alt="" />
                                <p className='font-semibold'>Subscribe</p>
                            </div>
                        </div>


                    </div>
                </footer>
                <div className='h-[1px] mt-7 mb-5 bg-[#858584]'>
                </div>
                <p className='text-[#CCC]'>&#169; NFT Marketplace</p>
            </div>
        </div>
    );
};

export default Footer;