import singUpHero from '../../assets/signUp/signUp_hero_img.png'
import lock from '../../assets/signUp/LockKey.png'
import email_img from '../../assets/signUp/email.png'

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignIn = () => {

    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setLoginError('');
      
        console.log(data);
        signIn(data?.email, data?.password)
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                setLoginError(error?.message);
            })

    }


    return (
        <>
            <div className='lg:flex gap-16'>
                <figure>
                    <img src={singUpHero} alt="" />
                </figure>
                <form className='py-5 lg:py-12 px-5 lg:px-0'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h3 className='text-[38px] lg:text-[51px] font-bold'>Please Login</h3>
                    <p className='lg:text-[22px] pb-[40px] pt-[20px] leading-8'>Welcome back start from where you left</p>

                    {/* user email */}
                    <div className=' mt-4 bg-white text-black pt-3 pr-[40px] pb-3 pl-[40px] rounded-[20px]  flex  items-center gap-3 border '>
                        <img className='h-full' src={email_img} alt="" />
                        <input type="email" name="email" id="" placeholder='user email'
                            {...register("email", { required: true })}
                        />

                    </div>
                    {errors.email && <span className="text-red-500 mt-1">This name is required</span>}

                    <div className=' mt-4 bg-white text-black pt-3 pr-[40px] pb-3 pl-[40px] rounded-[20px]  flex  items-center gap-3 border '>
                        <img className='h-full' src={lock} alt="" />
                        <input type="password" name="password" id="" placeholder='Password'

                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className="text-red-500 mt-1">This name is required</span>}
                    </div>



                    <input className='mt-[30px] w-full h-[46px] bg-[#A259FF] font-semibold rounded-[20px] cursor-pointer' type="submit" value="Login" />

                    {loginError && <span className="text-red-500 mt-1 text-center ">{loginError}</span>}

                    <p className='pt-2 text-right'><small>Don't have an account ? please <Link to='/signUp' className='text-[#A259FF] font-bold'>SignUp</Link></small></p>

                </form>
            </div>
        </>

    );
};

export default SignIn;