import icon from "../assets/icon.png"


const Navbar = () => {
    return (
        <div>
            <div className="flex items-center cursor-pointer pt-5">
                <img src={icon}
                    className="md:w-[65px] md:h-[65px] w-[50px] h-[50px]"
                    alt="" />
                <h1 className="text-gray-50 ml-2 font-bold md:text-lg text-md">Tiktok<br/> Wipe Load</h1>
            </div>
        </div>
    )
}

export default Navbar