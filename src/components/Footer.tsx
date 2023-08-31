import styles from "../styles/styles"
import { BiSolidFilm } from "react-icons/bi"
import { FaPaste } from "react-icons/fa"
import { ImDownload } from "react-icons/im"
import {BsLinkedin, BsGithub} from "react-icons/bs"
import {PiBagFill} from "react-icons/pi"
import {FaUserAlt} from "react-icons/fa"



const Footer = () => {

  return (
    <div className={`${styles.superContainer}`}>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-[30%] w-[100%]">
          <h1 className="text-gray-50 font-bold text-xl">
            How do I download the video?
          </h1>
          <p className="text-gray-50 font-ligth text-md">
            Follow the steps shown in front of you to know the easiest way to download TikTok videos without watermark.
          </p>
        </div>
        <div className="lg:w-[65%] w-[100%] lg:ml-5 ml-0 mt-5 lg:mt-0
        flex flex-col justify-center">
          <div className="flex items-center justify-center flex-col bg-[rgba(86,133,219,0.3)] rounded-md p-5">
            <BiSolidFilm size={40} color='white' />
            <h1 className="mt-2 text-center text-gray-50 text-xl font-bold">Select video</h1>
            <p className="mt-2 text-center text-gray-50 text-sm">Open the TikTok app and find the video you want to download without a watermark. Then, tap the "Share" button and select "Copy Link".</p>
          </div>
          <div className="flex items-center justify-center flex-col bg-[rgba(86,133,219,0.3)] rounded-md  mt-5 p-5">
            <FaPaste size={40} color='white' />
            <h1 className="mt-2 text-center text-gray-50 text-xl font-bold">Paste Link</h1>
            <p className="mt-2 text-center text-gray-50 text-sm">Next, paste the copied video link into the input field at the top of the page and click the "Get Video" button. Wait for a few moments and the video will be ready to download.</p>
          </div>
          <div className="flex items-center justify-center flex-col bg-[rgba(86,133,219,0.3)] rounded-md  mt-5 p-5">
            <ImDownload size={40} color='white' />
            <h1 className="mt-2 text-center text-gray-50 text-xl font-bold">Your video is ready</h1>
            <p className="mt-2 text-center text-gray-50 text-sm">Great news! Your video is now ready for download without a watermark. You can also download the music separately in mp3 format. Please note that the video will be in mp4 format.</p>
          </div>
        </div>
      </div>
      <div className="mt-8 py-10 flex items-center justify-evenly">
        <div className="flex items-center justify-center">
          <FaUserAlt size={25} color={'#fff'}/>
          <h1 className="ml-2 text-white text-center font-bold">Juan Buitrago</h1>
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          <BsLinkedin size={25} color={'#fff'}/>
          <a 
          href="https://www.linkedin.com/in/juan-d-buitrago/" target="_blank"
          className="ml-2 text-white text-center font-bold hover:underline">/juan-d-buitrago</a>
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          <BsGithub size={25} color={'#fff'}/>
          <a 
          href="https://github.com/S4NCHOPANZ4" target="_blank"
          className="ml-2 text-white text-center font-bold hover:underline">/S4NCHOPANZ4</a>
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          <PiBagFill size={25} color={'#fff'}/>
          <a 
          href="https://portfolio5-09.vercel.app" target="_blank"
          className="ml-2 text-white text-center font-bold hover:underline">portfolio5-09.vercel.app</a>
        </div>
      </div>
    </div>
  )
}

export default Footer