import w1 from '../../../../../public/weekly_digest/w1.png'
import email from '../../../../../public/weekly_digest/email.png'

const WeeklyDigest = () => {
    return (
        <div className="my-container mt-32 px-5 lg:px-0">
            <div className="lg:w-[1050px] lg:h-[430px] lg:bg-[#3b3b3b] lg:flex justify-center items-center rounded-[20px] lg:p-[60px]">
                <div className='lg:flex gap-20'>
                    <figure>
                        <img src={w1} alt="" />
                    </figure>
                    <div>
                        <h3 className='mt-8 lg:mt-0 text-[28px] lg:text-[38px] font-semibold leading-10'>Join Our Weekly <br /> Digest</h3>
                        <p className='pt-3 lg:pt-8 lg:text-[22px] lg:leading-8'>Get exclusive promotions & updates <br /> straight to your inbox.</p>
                        <div className='pt-12 lg:flex '>
                            <input className='w-full  px-5 py-4 bg-white rounded-[20px] ' type="email" name="" id="" placeholder='Enter your email here' />
                            <div className='cursor-pointer mt-3 lg:mt-0 lg:w-2/3  flex items-center justify-center lg:justify-start gap-2 bg-[#A259FF] rounded-[20px] px-5 py-4 lg:-ml-8'>
                                <img src={email} alt="" />
                                <p className='font-semibold'>Subscribe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeeklyDigest;