import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/css/main.css'
import './assets/css/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'
import Contact from './views/Contact'

function App() {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div> 
    </BrowserRouter>

  )
}

export default App
