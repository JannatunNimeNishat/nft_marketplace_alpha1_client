import signUpHero from '../../assets/signUp/signUp_hero_img.png'
import user from '../../assets/signUp/User.png'
import email from '../../assets/signUp/email.png'
import lock from '../../assets/signUp/LockKey.png'
import { Link, useNavigate } from 'react-router-dom';
import { set, useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
    const { handleLoading, registerNewUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const newUser = { username: data.username, email: data.email, password: data.password, img: data.imgURL, owned_nfts: [], amount: 0, followed_artists: [] }
        console.log(newUser);

        registerNewUser(data?.email, data?.password)
            .then(res => {
                console.log(res.user);
                updateUser(data?.username, data?.imgURL)
                    .then((res) => {
                        console.log('after user: ', res?.user);
                        navigate('/');
                    })
                    .catch(error => {
                        console.log(error?.message);
                        setRegisterError(error?.message);
                    })

            })
            .catch(error => {
                console.log(error?.message);
                setRegisterError(error?.message);
            })


        /* .then(res => res.json())
        .then(data => {

            handleLoading(false);
            if (data?.insertedId > 0) {
              
                navigate('/signIn')
            } else {
                setRegisterError(data?.message)
            }
           
        }) */
    }

    return (
        <div className='lg:flex gap-16'>
            <figure>
                <img src={signUpHero} alt="" />
            </figure>
            <form className='py-5 lg:py-12 px-5 lg:px-0'
                onSubmit={handleSubmit(onSubmit)}
            >
                <h3 className='text-[38px] lg:text-[51px] font-bold'>Create account</h3>
                <p className='lg:text-[22px] pb-[40px] pt-[20px] leading-8'>Welcome! enter your details and start <br /> creating, collecting and selling NFTs.</p>

                {/* user name */}
                <div className=' bg-white text-black pt-3 pr-[40px] pb-3 pl-[40px] rounded-[20px]  flex  items-center gap-3 border '>
                    <img className='h-full' src={user} alt="" />
                    <input type="text" name="" placeholder='Username'
                        {...register("username", { required: true })}
                    />
                </div>

                {errors.username && <span className="text-red-500 mt-1">This name is required</span>}

                {/* email */}
                <div className=' mt-4 bg-white text-black pt-3 pr-[40px] pb-3 pl-[40px] rounded-[20px]  flex  items-center gap-3 border '>
                    <img className='h-full' src={email} alt="" />
                    <input type="email" name="" placeholder='Email Address'

                        {...register("email", { required: true })}
                    />

                </div>

                {errors.email && <span className="text-red-500 mt-1">This name is required</span>}

                {/* imgURL */}
                <div className=' mt-4 bg-white text-black pt-3 pr-[40px] pb-3 pl-[40px] rounded-[20px]  flex  items-center gap-3 border '>
                    <img className='h-full' src={''} alt="" />
                    <input type="text" name="imgURL" placeholder='Image URL'
                        {...register("imgURL", {})}
                    />

                </div>

                {/* password */}
                <div className=' mt-4 bg-white text-black pt-3 pr-[40px] pb-3 pl-[40px] rounded-[20px]  flex  items-center gap-3 border '>
                    <img className='h-full' src={lock} alt="" />
                    <input type="password" name="" placeholder='Password'

                        {...register("password",
                            {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })}
                    />

                </div>
                {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have one upper case and one special character</p>}

                {/* confirm password */}
                <div className=' mt-4 bg-white text-black pt-3 pr-[40px] pb-3 pl-[40px] rounded-[20px]  flex  items-center gap-3 border '>
                    <img className='h-full' src={lock} alt="" />
                    <input type="password" name="confirmPassword" placeholder='Confirm Password'

                        {...register('confirmPassword', {
                            validate: (value) => value === watch("password") || 'Password do not match'
                        })}

                    />

                </div>
                {errors.confirmPassword && <p className="text-red-500">Password do not match</p>}


                <input className='mt-[30px] w-full h-[46px] bg-[#A259FF] font-semibold rounded-[20px] cursor-pointer' type="submit" value="Create account" />

                {registerError && <p className="text-red-500 mt-2 text-center">{registerError}</p>}

                <p className='pt-2 text-right'><small>Already have an account ? please <Link to='/signIn' className='text-[#A259FF] font-bold'>SignIn</Link></small></p>

            </form>
        </div>
    );
};

export default SignUp;