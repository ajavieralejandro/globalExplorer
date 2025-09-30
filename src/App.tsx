import { useState } from 'react'

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
import AboutUs from './components/about';
import PaqueteDetallePage from './components/PaqueteDetallePage';

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
    <Categorias autoplay={false} />
    <Paquetes />
    
     <AboutUs
      images={[
        "https://media.istockphoto.com/id/912274822/photo/mt-fuji-and-tokyo-skyline.jpg?s=1024x1024&w=is&k=20&c=h1FIoVs2nU2v9sdJg6Y_Se7asJrb1odV-RoD36BYaIU=", // principal
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1000&auto=format&fit=crop", // top-right
        "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?q=80&w=1000&auto=format&fit=crop", // bottom-right
      ]}
    />
    <ContactSection />
    <Prefooter />
    <Footer />
    
   
    </>
  )
}

export default App
