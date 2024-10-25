import './assets/css/main.css'
import './assets/css/style.css'
import Brands from './components/Brands'
import Featuer from './components/Featuer'
import Featuers from './components/Featuers'
import Footer from './components/Footer'
import Faqs from './components/Faqs'
import Header from './components/Header'
import Hero from './components/Hero'
import Slider from './components/Slider'
import Subscribe from './components/Subscribe'
import Testimonials from './components/Testimonials'

function App() {
  

  return (
    <div className='wrapper'>
      <Header />
      <main>
        <Hero />
        <Brands />
        <Featuers />
        <Slider />
        <Featuer />
        <Testimonials />
        <Faqs />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}

export default App
