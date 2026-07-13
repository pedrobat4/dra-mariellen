import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Beneficios from './components/Beneficios'
import Sobre from './components/Sobre'
import Tratamentos from './components/Tratamentos'
import Depoimentos from './components/Depoimentos'
import Unidades from './components/Unidades'
import CtaFinal from './components/CtaFinal'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Beneficios />
        <Sobre />
        <Tratamentos />
        <Depoimentos />
        <Unidades />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
