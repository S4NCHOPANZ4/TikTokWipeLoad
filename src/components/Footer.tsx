import styles from "../styles/styles"
import { BiSolidFilm } from "react-icons/bi"
import { FaPaste } from "react-icons/fa"
import { ImDownload } from "react-icons/im"


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
    </div>
  )
}

export default Footer