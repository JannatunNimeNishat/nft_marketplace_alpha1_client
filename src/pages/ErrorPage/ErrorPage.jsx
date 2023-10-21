import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import errorImg from '../../assets/error_page/animation_lltpg7j9.json'
import arrowLeft from '../../assets/error_page/left_arrow_red.json'
const ErrorPage = () => {
    return (
        <div className='relative flex items-center justify-center h-[100vh]'>
            <Link to='/' className='absolute top-0 left-10 flex items-center '>
               
                <Lottie className='h-20 w-20' animationData={arrowLeft}/>
                <p className='text-3xl font-semibold -ml-4 hover:text-red-700'>Back to Home</p>
            </Link>
            <Lottie className="h-[90vh]" animationData={errorImg} loop={true} />
        </div>
    );
};

export default ErrorPage;