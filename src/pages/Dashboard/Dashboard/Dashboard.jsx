import { NavLink, Outlet } from "react-router-dom";
import useGetUserData from "../../../hooks/useGetUserData";
import { BiHomeAlt,BiArrowBack } from "react-icons/bi";
import { RiNftFill } from "react-icons/ri";
import bided_nfts_img from '../../../assets/dashboard/bided_nfts.png'
import nft_creators_img from '../../../assets/dashboard/nft_creators.png'
const Dashboard = () => {

    const [singleUserData] = useGetUserData();
    const { username, email, img, amount, followed_artists, owned_nfts, bided_nfts, _id } = singleUserData || {};

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content h-full w-full bg-[#2b2b2b] text-white">
                {/* drawer btn */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 min-h-full bg-[#3b3b3b]  text-white">

                    <div className="flex flex-col items-center gap-3 mb-10">
                        <img className="h-32 w-32 rounded-full" src={img} alt="" />
                        <h3 className="text-2xl font-semibold">{username}</h3>
                        <h3 className=" font-semibold -mt-2">{email}</h3>
                    </div>


                    <div className="flex flex-col gap-5">
                        <NavLink to='/dashboard/user_home' className={({ isActive }) => isActive ? 'active-route' : 'inactive-route'}>
                            <BiHomeAlt className="h-5 w-5" />
                            Home
                        </NavLink>

                        <NavLink to='/dashboard/owned_nfts' className={({ isActive }) => isActive ? 'active-route' : 'inactive-route'}>
                            <RiNftFill className="h-5 w-5" />
                            Owned nfts
                        </NavLink>

                        <NavLink to='/dashboard/owned_nfts' className={({ isActive }) => isActive ? 'active-route' : 'inactive-route'}>
                            <img  className="h-8 w-8" src={bided_nfts_img} alt="" />
                            Bided nfts
                        </NavLink>

                        <NavLink to='/dashboard/owned_nfts' className={({ isActive }) => isActive ? 'active-route' : 'inactive-route'}>
                            <img  className="h-8 w-8" src={nft_creators_img} alt="" />
                            Follow list
                        </NavLink>
                    </div>
                        <div className="mt-8 mb-5 bg-black h-[1px]"/>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'active-route' : 'inactive-route'}>
                            <BiArrowBack  className="h-8 w-8" alt="" />
                            Back
                        </NavLink>

                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;