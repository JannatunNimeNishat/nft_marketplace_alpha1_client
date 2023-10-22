

const SmButton = ({children}) => {
    return (
        <button className=' bg-[#A259FF] rounded-[16px] px-5 hidden lg:flex items-center  h-[30px] 
        btn-hover my-hover-effect
        '>
            <p className='font-semibold'>{children}</p>
        </button>
    );
};

export default SmButton;