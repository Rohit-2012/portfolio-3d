import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas} from './components'

const App = ()=>{


  return (
    <BrowserRouter>
      <div className="relative z-2 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Tech/>
        <Experience/>
        <Works/>
      </div>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </BrowserRouter>
  )
}

export default App
