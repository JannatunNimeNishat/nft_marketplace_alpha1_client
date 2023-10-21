
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../../public/navbar/logo.png'

import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {

    const { logOut, user } = useContext(AuthContext);
  
    console.log('user', user);
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error?.message);
            })
    }

    const navItems = <>
        <li>
            <NavLink
                className={`text-white font-bold hover:text-white
                my-hover-effect
                `
                } to='/marketplace'


            >Marketplace</NavLink>
        </li>
        <li>
            <NavLink className={`text-white font-bold hover:text-white 
            
            my-hover-effect
            `} to='/rankings'>Rankings</NavLink>
           
        </li>
        <li>
            <NavLink className={`text-white font-bold hover:text-white 
        
            my-hover-effect
            `} to='/connect-a-Wallet'>Connect a wallet</NavLink>

        </li>
       
    </>
    return (
        <div className="navbar lg:px-10 py-5 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case lg:text-xl  mr-2">
                    <img className='h-6 w-6 block lg:hidden ' src={logo} alt="" />
                    <img className='hidden lg:block' src={logo} alt="" />
                    <h3>NFT Marketplace</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <div className='flex gap-3'>
                            <div to='#' className=" lg:flex btn  rounded-[28px] border-0  font-semibold hover:bg-black hover:text-white
                my-hover-effect
                ">
                                <img className='h-10 w-10 rounded-full' src={user?.photoURL}></img>

                            </div>
                            <div to='#' className="hidden lg:flex btn bg-[#A259FF] rounded-[20px] border-0 text-white font-semibold hover:bg-black hover:text-white
                my-hover-effect
                "
                                onClick={handleLogOut}
                            >
                                <p>Sign Out</p>
                            </div>
                        </div>

                        :
                        <Link to='/signIn' className=" flex  btn bg-[#A259FF] rounded-[20px] border-0 text-white font-semibold hover:bg-black hover:text-white
               
                ">
                            <p>Sign In</p>
                        </Link>

                }


            </div>
        </div>
    );
};

export default Navbar;