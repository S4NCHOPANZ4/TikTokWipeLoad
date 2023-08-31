import { useEffect, useState } from "react"
import {IoIosAlert} from "react-icons/io"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styles from "../styles/styles"
import { videoObjType } from "../typos"
import { fetchTikTokInfo } from "../api"
import axios from "axios"


const Home = () => {

  const [foundVideo, setFoundVideo] = useState<videoObjType | null>()
  const [videoUrl, setVideoUrl] = useState<string | null>('https://www.tiktok.com/@cat.tv.1/video/7215842970644401451?q=cat&t=1693456807330')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [progress, setProgress] = useState(0);



  const fetchVideo = async () => {
    if (videoUrl && videoUrl?.length > 0) {
      setError(false)
      setLoading(true)
      try {
        const data = await fetchTikTokInfo(videoUrl ? videoUrl : '')
        if(data === null){
          setError(true)
        }
        setFoundVideo(data)
        setLoading(false)
        setProgress(0)

      } catch (err) {
        setError(true)
        console.log(err)
      }
    } else {
      return
    }
  }
  const handleDownload = async (videoLink: string, filename: string) => {
    try {
      const response = await axios.get(videoLink, { responseType: 'blob' });
      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename, ); // Cambiar el nombre del archivo
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading media:', error);
    }
  };

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {

        setProgress((prevProgress) => {

          if (prevProgress < 50) {
            return prevProgress + 5;
          } else if (prevProgress >= 50 && prevProgress < 75) {
            return prevProgress + 2;
          } else {
            return prevProgress + (100 - prevProgress) / 5;
          }
        });

      }, 150);
      console.log(progress);
      if (progress > 120) {
        clearInterval(interval)
      }
      return () => clearInterval(interval);
    }
    else if (foundVideo) {
      setProgress(0)
    }
  }, [loading]);


  return (
    <div className={`${styles.superContainer}`}>
      <Navbar />
      <div className="md:h-[90vh]  flex flex-col justify-center items-center pt-20">
        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="text-gray-50 font-bold md:text-5xl text-2xl text-center">TikTok Converter</h1>
          <p className="text-gray-50 font-thin md:text-2xl text-md text-center">Download TikTok Videos without watermark</p>
        </div>
        <div className="md:w-[750px] w-[80vw]
            md:flex-row flex-col items-end
            flex justify-center md:items-center relative">
          <input
            autoFocus
            value={videoUrl ? videoUrl : ''}
            onChange={(e) => setVideoUrl(e.target.value)}
            type="text" placeholder="Paste TikTok Link" className="pl-2 md:w-[75%] 
                w-[100%] h-9 focus:outline-none text-md placeholder:text-gray-600"/>
          {
            loading ?
              <div className="md:w-[675px] w-[80vw] absolute md:bottom-0 bottom-10">
                <div className="progressbar">
                  <div style={{
                    height: "100%",
                    width: `${progress}%`,
                    backgroundColor: "#a66cff",
                    transition: "width 0.5s"
                  }}></div>
                </div>
              </div>
              :
              <></>
          }
          <button
            onClick={() => { fetchVideo() }}
            className="mt-2 md:mt-0 button-background text-white md:w-[15%] w-auto 
                px-3 md:px-0 h-9 font-ligth">Get video</button>
        </div>
        {
          error&&
          <div className="mt-4 bg-[#4f2c2c6f] md:w-[675px] w-[80vw] p-5 flex items-center justify-center  flex-col relative ">
              <IoIosAlert size={50} color={'#d95050d2'}/>
              <h1 className="font-bold text-[#d95050d2]">No video found</h1>
          </div>
        }
        {foundVideo ?
          <div className="mt-4 bg-[#3737376f] md:w-[675px] w-[80vw] p-5 flex md:flex-row flex-col relative">
            <div className="md:mr-5 md:pb-0 pb-5 flex items-center justify-center">
              <img src={foundVideo.cover[0]} alt="" className="h-[375.25px] w-[320px]" />
            </div>
            <div className="md:w-[60%] w-[100%]">
              <div className="font-bold text-gray-50 flex items-center text-sm ">
                <img src={foundVideo.avatar_thumb && foundVideo.avatar_thumb[0]} className="mr-2 rounded-[50%] h-[40px]" alt="" />
                <h1>{foundVideo.author && foundVideo.author[0]}</h1>
              </div>
              <h1 className="text-gray-50 mt-2 text-sm ">{foundVideo.description ? foundVideo.description[0] : 'No description'}</h1>
              <div className="md:absolute mt-3 bottom-5 right-5 md:w-auto w-[%100] flex justify-end">
                <button 
                onClick={()=> handleDownload(foundVideo.video[0], 'tiktok_video_nowatermark.mp4')}
                className="mt-2 md:mt-0  text-yellow-400 
                md:px-3 h-9 font-ligth rounded-lg font-bold mr-2 px-3 border border-solid border-yellow-400">.mp4</button>
                <button 
                onClick={()=> handleDownload(foundVideo.music[0], 'tiktok_audio_nowatermark.mp3')}
                className="mt-2 md:mt-0  text-green-400 
                md:px-3 h-9 font-ligth rounded-lg font-bold px-3 border border-solid border-green-400">.mp3</button>
              </div>

            </div>

          </div>
          :
          <></>
        }

      </div>

      <div className="w-[100%] pt-5 bg-[#232323]">
        <Footer />
      </div>
    </div>
  )
}

export default Home