import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Routes'

function App() {

  return (
    <>
    <div 
    // style={{
    //   background: "linear-gradient(180deg, #232323 0%, #131313 95%)"
    // }} 
    className="min-h-[90vh] w-[100%] bg-[#232323]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>

    </>
  )
}

export default App
