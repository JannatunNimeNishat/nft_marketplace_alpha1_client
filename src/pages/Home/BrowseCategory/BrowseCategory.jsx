
import c1 from '../../../../public/browseCategory/c1.png'
import c2 from '../../../../public/browseCategory/c2.png'
import c3 from '../../../../public/browseCategory/c3.png'
import c4 from '../../../../public/browseCategory/c4.png'
import c5 from '../../../../public/browseCategory/c5.png'
import c6 from '../../../../public/browseCategory/c6.png'
import c7 from '../../../../public/browseCategory/c7.png'
import c8 from '../../../../public/browseCategory/c8.png'
import {motion} from 'framer-motion'
const BrowseCategory = () => {
    return (
        <div className="my-container mt-32 px-5 lg:px-0">
            <h3 className="text-[28px] lg:text-[38px] font-semibold">Browse Categories</h3>

            <div className="pt-12 grid grid-cols-1 lg:grid-cols-4 gap-7">

                {/* 1st */}
              {/*   <motion.div
                initial={{x:-100}}
                animate={{x:0, rotate:360}}
               
                transition={{
                    delay:1, 
                    duration:.5,
                    type:'spring',
                    bounce:0.4
                }}
                >
                    <img className=' w-full' src={c1} alt="" />
                    <div className='bg-[#3B3B3B] px-5 py-5 rounded-b-[20px]'>
                        <h3 className='text-[22px] font-semibold'>Art</h3>
                    </div>
                </motion.div> */}
               
                <div className='my-hover-effect'>
                    <img className=' w-full' src={c1} alt="" />
                    <div className='bg-[#3B3B3B] px-5 py-5 rounded-b-[20px]'>
                        <h3 className='text-[22px] font-semibold'>Art</h3>
                    </div>
                </div>

                {/* 2nd */}
                <div className='my-hover-effect'>
                    <img className=' w-full' src={c2} alt="" />
                    <div className='bg-[#3B3B3B] px-5 py-5 rounded-b-[20px]'>
                        <h3 className='text-[22px] font-semibold'>Collectibles</h3>
                    </div>
                </div>

                {/* 3rd */}
                <div className='my-hover-effect'>
                    <img className=' w-full' src={c3} alt="" />
                    <div className='bg-[#3B3B3B] px-5 py-5 rounded-b-[20px]'>
                        <h3 className='text-[22px] font-semibold'>Music</h3>
                    </div>
                </div>

                {/* 4th */}
                <div className='my-hover-effect'>
                    <img className=' w-full' src={c4} alt="" />
                    <div className='bg-[#3B3B3B] px-5 py-5 rounded-b-[20px]'>
                        <h3 className='text-[22px] font-semibold'>Photography</h3>
                    </div>
                </div>

                {/* 5th */}
                <div className='my-hover-effect'>
                    <img className=' w-full' src={c5} alt="" />
                    <div className='bg-[#3B3B3B] px-5 py-5 rounded-b-[20px]'>
                        <h3 className='text-[22px] font-semibold'>Video</h3>
                    </div>
                </div>

                {/* 6th */}
                <div className='my-hover-effect'>
                    <img className=' w-full' src={c6} alt="" />
                    <div className='bg-[#3B3B3B] px-5 py-5 rounded-b-[20px]'>
                        <h3 className='text-[22px] font-semibold'>Utility</h3>
                    </div>
                </div>

                {/* 7th */}
                <div className='my-hover-effect'>
                    <img className=' w-full' src={c7} alt="" />
                    <div className='bg-[#3B3B3B] px-5 py-5 rounded-b-[20px]'>
                        <h3 className='text-[22px] font-semibold'>Sport</h3>
                    </div>
                </div>

                {/* 8th */}
                <div className='my-hover-effect'>
                    <img className=' w-full' src={c8} alt="" />
                    <div className='bg-[#3B3B3B] px-5 py-5 rounded-b-[20px]'>
                        <h3 className='text-[22px] font-semibold'>Virtual Worlds</h3>
                    </div>
                </div>
               



            </div>

        </div>
    );
};

export default BrowseCategory;