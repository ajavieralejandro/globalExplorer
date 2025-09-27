import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar';
import HeroCover from './components/hero';
import Paquetes from './components/paquetes';
import Price from './components/pricing';
import Prefooter from './components/pre-footer';
import Team from './components/team';
import Footer from './components/footer';
import ContactSection from './components/contactSection';
import './App.css'
import Categorias from './components/categorias';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
        <HeroCover
      imageUrl="https://travelconnect.com.ar/storage/tripnow/imagenes/publicidad_imagen_1_68d4788000466.png"
      heading="Viví tu próximo destino"
      subheading="Inspirate, elegí y viajá: todo en un solo lugar."
      alt="Vista panorámica de un destino turístico"
      align="center" // "left" | "right"
    />
    <Categorias />
    <Paquetes />
    
    <Team />
    <Price />
    <ContactSection />
    <Prefooter />
    <Footer />
    
   
    </>
  )
}

export default App
