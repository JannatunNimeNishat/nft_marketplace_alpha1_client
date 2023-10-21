import heroImg from '../../assets/connect_a_wallate/heroImg.png'
import metamask from '../../assets/connect_a_wallate/Metamask.png'
import walletConnect from '../../assets/connect_a_wallate/WalletConnect.png'
import coinbase from '../../assets/connect_a_wallate/Coinbase.png'

const ConnectAWallate = () => {
    return (
        <div className=" lg:flex gap-16">
            <figure>
                <img src={heroImg} alt="" />
            </figure>
            <div className='py-5 lg:py-12 px-5 lg:px-0'>
                <h3 className='text-[38px] lg:text-[51px] font-bold'>Connect wallet</h3>
                <p className='lg:text-[22px] pb-[40px] pt-[20px] leading-8'>Choose a wallet you want to connect. <br /> There are several wallet providers.</p>

                <div className='cursor-pointer bg-[#3B3B3B] pt-3 pr-[40px] pb-3 pl-[40px] rounded-[20px]  flex  items-center gap-4 border border-[#A259FF]'>
                    <img src={metamask} alt="" />
                    <p className='text-[22px] font-bold'>Metamask</p>
                </div>

                <div className='mt-5 cursor-pointer bg-[#3B3B3B] pt-3 pr-[40px] pb-3 pl-[40px] rounded-[20px]  flex  items-center gap-4 border border-[#A259FF]'>
                    <img src={walletConnect} alt="" />
                    <p className='text-[22px] font-bold'>Wallet Connect</p>
                </div>

                <div className='mt-5 cursor-pointer bg-[#3B3B3B] pt-3 pr-[40px] pb-3 pl-[40px] rounded-[20px]  flex  items-center gap-4 border border-[#A259FF]'>
                    <img src={coinbase} alt="" />
                    <p className='text-[22px] font-bold'>Coinbase</p>
                </div>


            </div>
        </div>
    );
};

export default ConnectAWallate;