import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styles from "../styles/styles"
import { videoObjType } from "../typos"
import { fetchTikTokInfo } from "../api"

const Home = () => {

  const [foundVideo, setFoundVideo] = useState<videoObjType | null>()
  const [videoUrl, setVideoUrl] = useState<string | null>()
  const [loading, setLoading] = useState<boolean>(false)
  const [progress, setProgress] = useState(0);



  const fetchVideo = async () => {
    if (videoUrl && videoUrl?.length > 0) {
      setLoading(true)
      try {
        const data = await fetchTikTokInfo(videoUrl ? videoUrl : '')
        setFoundVideo(data)
        console.log(data)
        setLoading(false)
        setProgress(0)

      } catch (err) {
        console.log(err)
      }
    } else {
      return
    }
  }

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
      <div className="h-[90vh] flex flex-col justify-center items-center">
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

        {foundVideo ?
          <div className="mt-4 bg-[#3737376f] md:w-[675px] w-[80vw] p-5 flex">
            <div className="mr-5">
              <img src={foundVideo.cover[0]} alt="" className="h-[281.25px] w-[300px]"/>
            </div>
            <div>
              <h1 className="text-gray-50">{foundVideo.description? foundVideo.description[0] : 'No description'}</h1>
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