import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styles from "../styles/styles"

const Home = () => {
  return (
    <div className={`${styles.superContainer}`}>
      <Navbar/>
        <div className="h-[90vh] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mb-5">
                <h1 className="text-gray-50 font-bold md:text-5xl text-2xl text-center">TikTok Converter</h1>
                <p className="text-gray-50 font-thin md:text-2xl text-md text-center">Download TikTok Videos without watermark</p>
            </div>
            <div className="md:w-[750px] w-[80vw]
            md:flex-row flex-col items-end
            flex justify-center md:items-center">
                <input type="text" placeholder="Paste TikTok Link" className="pl-2 md:w-[75%] 
                w-[100%] h-9 focus:outline-none text-md placeholder:text-gray-600"/>
                <button className="mt-2 md:mt-0 button-background text-white md:w-[15%] w-auto 
                px-3 md:px-0 h-9 font-ligth">Get video</button>
            </div>
        </div>
        <div className="w-[100%] pt-5 bg-[#232323]">
          <Footer/>
        </div>
    </div>
  )
}

export default Home