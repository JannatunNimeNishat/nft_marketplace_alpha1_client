
import d1 from '../../../../public/trending_collection/d1.png'
import d2 from '../../../../public/trending_collection/d2.png'
import d3 from '../../../../public/trending_collection/d3.png'
import ds from '../../../../public/trending_collection/ds.png'

import m1 from '../../../../public/trending_collection/m1.png'
import m2 from '../../../../public/trending_collection/m2.png'
import m3 from '../../../../public/trending_collection/m3.png'
import ms from '../../../../public/trending_collection/ms.png'

import r1 from '../../../../public/trending_collection/r1.png'
import r2 from '../../../../public/trending_collection/r2.png'
import r3 from '../../../../public/trending_collection/r3.png'
import rs from '../../../../public/trending_collection/rs.png'

const TrendingCollection = () => {
    return (
        <div className=" mt-16 lg:mt-32 my-container px-5 lg:px-0">
            <h3 className="text-[38px] font-semibold">Trending Collection</h3>
            <p className=" text-[22px]">Checkout our weekly updated trending collection.</p>
            <div className="mt-[60px] grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* 1st */}
                <div className='pt-5 lg:pt-0 
                
                '>
                    <figure>
                        <img className='object-cover  w-full my-hover-effect'  src={d1} alt="" />
                    </figure>
                    <div className='grid grid-cols-3 gap-2 lg:gap-0 pt-[15px] '>
                        <img className='my-hover-effect' src={d2} alt="" />
                        <img className='my-hover-effect' src={d3} alt="" />
                        <p className='my-hover-effect  bg-[#A259FF] rounded-[20px] text-2xl font-bold flex justify-center items-center'>
                            1025+
                        </p>
                    </div>
                    <div className='pt-[15px]'>
                        <h3 className='font-semibold text-[22px]'>DSGN Animals</h3>
                        <div className='flex items-center gap-3 pt-1'>
                            <img src={ds} alt="ms" />
                            <p>MrFox</p>
                        </div>
                    </div>
                </div>

                {/* 2nd */}
                <div className='pt-5 lg:pt-0'>
                    <figure>
                        <img className='object-cover  w-full my-hover-effect'  src={m1} alt="" />
                    </figure>
                    <div className='grid grid-cols-3 gap-2 lg:gap-0 pt-[15px] '>
                        <img className='my-hover-effect' src={m2} alt="" />
                        <img className='my-hover-effect' src={m3} alt="" />
                        <p className='  bg-[#A259FF] rounded-[20px] text-2xl font-bold flex justify-center items-center my-hover-effect'>
                            1025+
                        </p>
                    </div>
                    <div className='pt-[15px]'>
                        <h3 className='font-semibold text-[22px]'>Magic Mushrooms</h3>
                        <div className='flex items-center gap-3 pt-1'>
                            <img src={ms} alt="ms" />
                            <p>Shroomie</p>
                        </div>
                    </div>
                </div>
                {/* 3rd */}
                <div className='pt-5 lg:pt-0'>
                    <figure>
                        <img className='object-cover  w-full my-hover-effect'  src={r1} alt="" />
                    </figure>
                    <div className='grid grid-cols-3 gap-2 lg:gap-0 pt-[15px] '>
                        <img className='my-hover-effect' src={r2} alt="" />
                        <img className='my-hover-effect' src={r3} alt="" />
                        <p className='  bg-[#A259FF] rounded-[20px] text-2xl font-bold flex justify-center items-center my-hover-effect'>
                            1025+
                        </p>
                    </div>
                    <div className='pt-[15px]'>
                        <h3 className='font-semibold text-[22px]'>Disco Machines</h3>
                        <div className='flex items-center gap-3 pt-1'>
                            <img src={rs} alt="ms" />
                            <p>BeKind2Robots</p>
                        </div>
                    </div>
                </div>
               



            </div>
        </div>
    );
};

export default TrendingCollection;