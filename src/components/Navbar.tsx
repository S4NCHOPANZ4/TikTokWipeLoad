import icon from "../assets/icon.png"


const Navbar = () => {
    return (
        <div>
            <div className="flex top-2 left-4 absolute items-center cursor-pointer">
                <img src={icon}
                    className="md:w-[50px] md:h-[65px] w-[40px] h-[50px]"
                    alt="" />
                <h1 className="text-gray-50 ml-2 font-bold md:text-lg text-md">Ti<span className="text-[#6599fb]">k</span>t<span className="text-[#ff96d5]">o</span>k<br/> W<span className="text-[#ff96d5]">i</span>pe L<span className="text-[#ff96d5]">o</span><span className="text-[#5684db]">a</span>d</h1>
            </div>
        </div>
    )
}

export default Navbar