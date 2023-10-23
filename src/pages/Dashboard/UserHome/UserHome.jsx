import useGetUserData from "../../../hooks/useGetUserData";
import ethereum_img from '../../../assets/dashboard/ethereum.png'
import bided_img from '../../../assets/dashboard/bided_img.png'
import owned_nft_img from '../../../assets/dashboard/owned_nft_img.png'
import SmButton from "../../../components/SmButton";
import { useState } from "react";
import RequestAmountModal from "../../../components/RequestAmountModal";
const UserHome = () => {
    const [singleUserData] = useGetUserData();
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { username, email, img, amount, followed_artists, owned_nfts, bided_nfts, _id } = singleUserData || {};

    const handleModalOpen = () => {
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    }


    return (
        <div className="h-full w-full my-container py-10 px-5">

            <div className="grid grid-cols-3 gap-5">
                <div
                    className='bg-[#3B3B3B] rounded-[20px] p-5 flex flex-col items-center justify-center relative my-hover-effect cursor-pointer'
                >
                    <img className="h-24 w-24" src={ethereum_img} alt="" />
                    <h3 className='text-2xl font-semibold pt-5'><span className="text-[20px]">Current Balance:</span> {amount} ETH</h3>

                </div>
                <div
                    className='bg-[#3B3B3B] rounded-[20px] p-5 flex flex-col items-center justify-center relative my-hover-effect cursor-pointer'
                >
                    <img className="h-24 w-24" src={bided_img} alt="" />
                    <h3 className='text-2xl font-semibold pt-5'><span className="text-[20px]">Bided nfts:</span> {bided_nfts?.length} </h3>
                </div>
                <div
                    className='bg-[#3B3B3B] rounded-[20px] p-5 flex flex-col items-center justify-center relative my-hover-effect cursor-pointer'
                >
                    <img className="h-24 w-24" src={owned_nft_img} alt="" />
                    <h3 className='text-2xl font-semibold pt-5'><span className="text-[20px]">Owned nfts:</span> {owned_nfts?.length || 0} </h3>
                </div>
            </div>

            {/*  */}
            <div className="mt-14">
                <h3 className="text-2xl font-bold">Request for Balance</h3>
                <button className="mt-3"
                    onClick={handleModalOpen}
                >
                    <SmButton>
                        Request
                    </SmButton>
                </button>

            </div>

            {/* modal  */}
            <RequestAmountModal
                isOpen={isModalOpen}
                handleModalClose={handleModalClose}
            ></RequestAmountModal>

        </div>
    );
};

export default UserHome;