
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import OurTech from './pages/OurTech'
import Who from './pages/Who'
import Contact from './pages/Contact'
import What from './pages/What'

function App() {
  

  return (
    <div>

      
      
      <Routes>
        
        <Route index element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/tech" element={<OurTech />}/>
        <Route path="/who" element={<Who />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/what" element={<What />}/>
      
      </Routes>

      

    </div>
  )
}

export default App
