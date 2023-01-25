import Navbar from "./Navbar"
import Classes from "./pages/Classes"
import Home from "./pages/Home"
import About from "./pages/About"
import Calculators from "./pages/Calculators"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
