

const RequestAmountModal = ({ isOpen, handleModalClose }) => {

    const handelBackdropClick = (e) => {
        // console.log('clicked');
        if (e.target === e.currentTarget) {
            // console.log('clicked');
            handleModalClose()
        }
    }
    return (
        <div className="relative"
        onClick={handelBackdropClick}
        >
            <div
                className={` fixed inset-0 flex items-center justify-center z-50 ${isOpen ? '' : 'hidden'}`}
                
                >
                <div className="bg-[#A259FF] px-2 rounded-full absolute top-52 right-[430px] cursor-pointer z-10 hover:bg-black" 
                onClick={handleModalClose}
                >X</div>
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="z-50 w-full max-w-md p-6 bg-[#3B3B3B] text-white rounded-lg shadow-lg">
                   
                   
                    <input className="rounded-lg px-3 py-1 text-black" placeholder="Enter amount" type="number" name="" id="" />
                    <select className="text-black rounded-lg ml-2 py-1" name="" id="">
                        <option selected value="">ETH</option>
                    </select>
                    <input className="rounded-lg px-3 py-1 text-black mt-3" placeholder="Transaction ID " type="text" name="" id="" />
                    <div className="mt-2 flex justify-end">
                        <button
                            className="px-3 py-1 bg-[#A259FF] text-white rounded hover:bg-black"
                            onClick={handleModalClose}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestAmountModal;